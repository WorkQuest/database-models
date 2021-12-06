import {getUUID} from "../../utils";
import {Media} from "../Media";
import {User} from "../user/User";
import {DiscussionComment} from "./DiscussionComment";
import {DiscussionMedia} from "./DiscussionMedia";
import {DiscussionLike} from "./DiscussionLike";
import {
  Model,
  Table,
  HasOne,
  Column,
  Scopes,
  HasMany,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";
import {StarredDiscussion} from "./StarredDiscussion";

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: User.scope('short'),
      as: 'author',
    }, {
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }]
  },
}))
@Table({ paranoid: true })
export class Discussion extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @Column({ type: DataType.STRING, allowNull: false }) title: string;
  @Column({ type: DataType.TEXT, allowNull: false }) description: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 }) amountLikes: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) amountComments: number;

  @BelongsTo(() => User) author: User;

  @HasOne(() => DiscussionLike) liked: DiscussionLike;
  @HasOne(() => DiscussionLike) star: StarredDiscussion;
  @HasMany(() => DiscussionComment) comments: DiscussionComment[];
  @HasMany(() => DiscussionLike) likes: DiscussionLike[];

  @BelongsToMany(() => Media, () => DiscussionMedia) medias: Media[];
  @BelongsToMany(() => User, () => DiscussionLike) userLikes: User[];
}
