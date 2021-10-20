import {getUUID} from '../../utils';
import {Media} from "../Media";
import {ForumComment} from "./ForumComment";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

@Table
export class ForumCommentMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false}) mediaId: string;

  @ForeignKey(() => ForumComment)
  @Column ({type:DataType.STRING, allowNull: false}) commentId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => ForumComment) comment: ForumComment;
}
