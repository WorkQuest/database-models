import {Column, DataType, ForeignKey, Model, Table, BelongsTo, BelongsToMany, Scopes} from "sequelize-typescript";
import { error, getUUID } from "../../utils";
import { Errors } from "../../utils/errors";
import { User } from "../User";
import { Chat } from "./Chat";
import { Media } from "../Media";
import { MessageMedia } from "./MessageMedia";
import {Admin} from "../Admin";

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
export class Message extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) senderUserId: string;

  @ForeignKey(() => Admin) /*if dispute*/
  @Column({type: DataType.STRING, allowNull: false}) senderAdminId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.INTEGER, allowNull: false}) type: MessageType;

  @Column(DataType.TEXT) text: string;

  @BelongsToMany(() => Media, () => MessageMedia) medias: Media[];
  @BelongsTo(() => User) sender: User;
  @BelongsTo(() => Admin) adminSender: Admin; /*if dispute*/
  @BelongsTo(() => Chat) chat: Chat;

  mustBeSender(userId: String) {
    if (this.senderUserId !== userId) {
      throw error(Errors.Forbidden, "User isn't sender of the message", {
        messageId: this.id,
      });
    }
  }

  adminMustBeSender(adminId: String) { /*if dispute*/
    if (this.senderUserId !== adminId) {
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
