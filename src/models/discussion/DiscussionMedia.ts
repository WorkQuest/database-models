import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Media} from "../Media";
import {Discussion} from "./Discussion";

@Table
export class DiscussionMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Medias", key: "id" }}) mediaId: string;

  @ForeignKey(() => Discussion)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Discussions", key: "id" }}) discussionId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => Discussion) discussion: Discussion;
}
