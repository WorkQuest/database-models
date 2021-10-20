import {getUUID} from "../../utils";
import {User} from "../user/User";
import {ForumPost} from "./ForumPost";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ForumPostLike extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ForumPost)
  @Column ({type:DataType.STRING, allowNull: false}) postId: string;

  @ForeignKey(() => User)
  @Column ({type:DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => ForumPost) post: ForumPost;
}
