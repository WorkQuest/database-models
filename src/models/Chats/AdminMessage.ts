import {Column, DataType, ForeignKey, Model, Table, BelongsTo, BelongsToMany, Scopes} from "sequelize-typescript";
import { error, getUUID } from "../../utils";
import { Errors } from "../../utils/errors";
import { Media } from "../Media";
import { MessageMedia } from "./MessageMedia";
import {Admin} from "../Admin";
import {AdminChat} from "./AdminChat";

export enum MessageType {
  informational,
  common,
}

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: Media,
      as: 'medias',
      through: {
        attributes: []
      }
    }]
  }
}))
@Table
export class AdminMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) senderAdminId: string;

  @ForeignKey(() => AdminChat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.INTEGER, allowNull: false}) type: MessageType;

  @Column(DataType.TEXT) text: string;

  @BelongsToMany(() => Media, () => MessageMedia) medias: Media[];
  @BelongsTo(() => Admin) adminSender: Admin;
  @BelongsTo(() => AdminChat) chat: AdminChat;

  mustBeSender(adminId: String) {
    if (this.senderAdminId !== adminId) {
      throw error(Errors.Forbidden, "Admin isn't sender of the message", {
        messageId: this.id,
      });
    }
  }

  mustBeChat(chatId: String) {
    if (this.chatId !== chatId) {
      throw error(Errors.Forbidden, "This message not from this chat", {});
    }
  }
}
