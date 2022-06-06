import { Message } from "./Message";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey, Scopes,
} from "sequelize-typescript";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: []
    },
    include: [{
      model: Message,
      as: 'beforeDeletionMessage'
    }]
  },
}))
@Table
export class ChatDeletionData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) beforeDeletionMessageId: string;

  @Column({type: DataType.INTEGER, allowNull: false}) beforeDeletionMessageNumber: string;

  @BelongsTo(() => User) chatMember: User;
  @BelongsTo(() => Message) beforeDeletionMessage: Message;
}
