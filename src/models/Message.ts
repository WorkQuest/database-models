import {Column, DataType, ForeignKey, Model, Table, HasOne, BelongsTo, BelongsToMany, Scopes} from "sequelize-typescript";
import { error, getUUID } from "../utils";
import { Errors } from "../utils/errors";
import { User } from "./User";
import { Chat } from "./Chat";
import { Media } from "./Media";
import { MessageMedia } from "./MessageMedia";
import {StarredMessage} from "./StarredMessage";

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

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column(DataType.TEXT) text: string;

  @BelongsToMany(() => Media, () => MessageMedia) medias: Media[];
  @BelongsTo(() => User) sender: User;
  @BelongsTo(() => Chat) chat: Chat;

  @HasOne(() => StarredMessage) starredMessage: StarredMessage;

  static async messageMustExists(messageId: string) {
    if (!await Message.findByPk(messageId)) {
      throw error(Errors.NotFound, "Message does not exist", { messageId });
    }
  }

  mustBeSender(userId: String) {
    if (this.senderUserId !== userId) {
      throw error(Errors.Forbidden, "User isn't sender of the message", {
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
