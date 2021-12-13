import {getUUID} from '../../utils';
import {Media} from "../Media";
import {DiscussionComment} from "./DiscussionComment";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

@Table
export class DiscussionCommentMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Medias", key: "id" }}) mediaId: string;

  @ForeignKey(() => DiscussionComment)
  @Column ({type:DataType.STRING, allowNull: false, references: { model: "DiscussionComments", key: "id" }}) commentId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => DiscussionComment) comment: DiscussionComment;
}
