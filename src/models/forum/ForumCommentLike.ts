import {getUUID} from "../../utils";
import {User} from "../user/User";
import {ForumComment} from "./ForumComment";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ForumCommentLike extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ForumComment)
  @Column ({type:DataType.STRING, allowNull: false}) commentId: string;

  @ForeignKey(() => User)
  @Column ({type:DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => ForumComment) likeComment: ForumComment;
}
