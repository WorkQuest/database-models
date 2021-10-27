import {getUUID} from "../../utils";
import {User} from "../user/User";
import {DiscussionComment} from "./DiscussionComment";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class DiscussionCommentLike extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => DiscussionComment)
  @Column ({type:DataType.STRING, allowNull: false}) commentId: string;

  @ForeignKey(() => User)
  @Column ({type:DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => DiscussionComment) likeComment: DiscussionComment;
}
