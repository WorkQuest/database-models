import {getUUID} from "../../utils";
import {Media} from "../Media";
import {User} from "../user/User";
import {ForumComment} from "./ForumComment";
import {ForumPostMedia} from "./ForumPostMedia";
import {ForumPostLike} from "./ForumPostLike";
import {
  Model,
  Table,
  Column,
  Scopes,
  HasMany,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["rootComments"],
    },
    include: [{
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }, {
      model: User.scope("short"),
      as: "userLikes",
      through: { attributes: ["id"] }
    }]
  },
  withRootComments: {
    include: [{
      model: ForumComment,
      as: "rootComments",
      where: { rootCommentId: null }
    }, {
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }, {
      model: User.scope('short'),
      as: "userLikes",
      through: { attributes: ['id'] }
    }]
  }
}))
@Table({ paranoid: true })
export class ForumPost extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @Column({ type: DataType.TEXT, allowNull: false }) text: string;

  @BelongsTo(() => User) author: User;

  @HasMany(() => ForumComment) rootComments: ForumComment[]; /** Where rootCommentId is null */
  @HasMany(() => ForumPostLike) likes: ForumPostLike[];

  @BelongsToMany(() => Media, () => ForumPostMedia) medias: Media[];
  @BelongsToMany(() => User, () => ForumPostLike) userLikes: User[];
}
