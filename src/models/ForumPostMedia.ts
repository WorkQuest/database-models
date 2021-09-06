import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import { Media } from "./Media";
import { ForumPost } from "./ForumPost";

@Table
export class ForumPostMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false}) mediaId: string;

  @ForeignKey(() => ForumPost)
  @Column({type: DataType.STRING, allowNull: false}) forumPostId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => ForumPost) postId: ForumPost;
}
