import {
  Column, DataType, ForeignKey, Model, Table, BelongsTo, Scopes
} from 'sequelize-typescript';
import {getUUID} from "../utils";
import { User } from "./User";
import { ForumPostComment } from "./ForumPostComment";

@Scopes(() => ({
  defaultScope: {
    attributes: ["id", "userId", "commentId"],
  }
}))
@Table
export class ForumPostCommentLike extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ForumPostComment)
  @Column ({type:DataType.STRING, allowNull: false}) commentId: string;

  @ForeignKey(() => User)
  @Column ({type:DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => ForumPostComment) likeComment: ForumPostComment;
  @BelongsTo(() => User) user: User;
}
