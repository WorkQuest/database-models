import {Media} from "../Media";
import {User} from "../user/User";
import {getUUID} from "../../utils";
import {Discussion} from "./Discussion";
import {DiscussionCommentMedia} from "./DiscussionCommentMedia";
import {DiscussionCommentLike} from "./DiscussionCommentLike";
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
      model: User.scope('short'),
      as: "author",
    }, {
      model: DiscussionComment.unscoped(),
      as: 'rootComment',
    }],
  },
}))
@Table
export class DiscussionComment extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @ForeignKey(() => Discussion)
  @Column({ type: DataType.STRING, allowNull: false }) discussionId: string;

  @ForeignKey(() => DiscussionComment)
  @Column(DataType.STRING) rootCommentId: string;

  @Column({ type: DataType.TEXT, allowNull: false }) text: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 }) amountLikes: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) amountSubComments: number;

  @BelongsTo(() => User) author: User;
  @BelongsTo(() => Discussion) discussion: Discussion;
  @BelongsTo(() => DiscussionComment) rootComment: DiscussionComment;

  @HasMany(() => DiscussionComment) subComments: DiscussionComment[];
  @HasMany(() => DiscussionCommentLike) commentLikes: DiscussionCommentLike[];

  @BelongsToMany(() => Media, () => DiscussionCommentMedia) medias: Media[];
  @BelongsToMany(() => User, () => DiscussionCommentLike) userLikes: User[];
}
