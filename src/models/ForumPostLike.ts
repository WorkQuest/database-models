import {
  Column, DataType, ForeignKey, Model, Table, BelongsTo, Scopes
} from 'sequelize-typescript';
import {getUUID} from "../utils";
import { User } from "./User";
import {ForumPost} from "./ForumPost";

@Scopes(() => ({
  defaultScope: {
    attributes: ["id", "userId", "forumPostId"],
  }
}))
@Table
export class ForumPostLike extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ForumPost)
  @Column ({type:DataType.STRING, allowNull: false}) forumPostId: string;

  @ForeignKey(() => User)
  @Column ({type:DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => ForumPost) postId: ForumPost;
  @BelongsTo(() => User) user: User;
}
