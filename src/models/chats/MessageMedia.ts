import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Media } from "../Media";
import { Message } from "./Message";

@Table
export class MessageMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false}) mediaId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) messageId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => Message) message: Message;
}
