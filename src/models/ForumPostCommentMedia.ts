import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { getUUID } from '../utils';
import { Media } from "./Media";
import { ForumPostComment } from "./ForumPostComment";


@Table
export class ForumPostCommentMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false}) mediaId: string;

  @ForeignKey(() => ForumPostComment)
  @Column ({type:DataType.STRING, allowNull: false}) forumPostCommentId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => ForumPostComment) comment: ForumPostComment;
}
