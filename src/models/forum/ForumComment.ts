import {Media} from "../Media";
import {User} from "../user/User";
import {getUUID} from "../../utils";
import {ForumPost} from "./ForumPost";
import {ForumCommentMedia} from "./ForumCommentMedia";
import {ForumCommentLike} from "./ForumCommentLike";
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
    include: [{
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }, {
      model: User.scope("short"),
      as: "userLikes",
      through: { attributes: [] }
    }]
  },
  withSubComments: {
    include: [{
      model: ForumComment,
      as: 'subComments'
    }, {
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }, {
      model: User.scope("short"),
      as: "userLikes",
      through: { attributes: [] }
    }]
  }
}))
@Table
export class ForumComment extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @ForeignKey(() => ForumPost)
  @Column({ type: DataType.STRING, allowNull: false }) forumPostId: string;

  @ForeignKey(() => ForumComment)
  @Column(DataType.STRING) rootCommentId: string;

  @Column({ type: DataType.TEXT, allowNull: false }) text: string;

  @BelongsTo(() => User) author: User;
  @BelongsTo(() => ForumPost) forumPost: ForumPost;
  @BelongsTo(() => ForumComment) rootComment: ForumComment;

  @HasMany(() => ForumComment) subComments: ForumComment[];
  @HasMany(() => ForumCommentLike) commentLikes: ForumCommentLike[];

  @BelongsToMany(() => Media, () => ForumCommentMedia) medias: Media[];
  @BelongsToMany(() => User, () => ForumCommentLike) userLikes: User[];
}
