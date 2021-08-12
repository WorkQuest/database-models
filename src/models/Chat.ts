import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  HasMany,
  BelongsToMany, Scopes, HasOne
} from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "./User";
import { error, getUUID } from "../utils";
import { Errors } from "../utils/errors";

export enum ChatType {
  private = 0,
  group,
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["messages", "chatMembers", "updatedAt"]
    },
    include: [{
      model: User,
      as: 'creator'
    }]
  }
}))
@Table
export class Chat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User) /* If group chat */
  @Column({type: DataType.STRING, defaultValue: null}) ownerUserId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, defaultValue: null}) lastMessageId: string;

  @Column(DataType.DATE) lastMessageDate: Date;
  @Column({type: DataType.INTEGER, allowNull: false}) type: ChatType;

  @BelongsToMany(() => User, () => ChatMember) members: User[];
  @BelongsTo(() => User) creator: User;
  @BelongsTo(() => Message, {foreignKey: 'lastMessageId', constraints: false}) lastMessage: Message;

  @HasMany(() => Message) messages: Message[];
  @HasMany(() => ChatMember) chatMembers: ChatMember[];
  @HasOne(() => ChatMember) otherMember: ChatMember;

  mustHaveMember(userId: String) {
    if (!this.members.some(user => user.id === userId)) {
      throw error(Errors.Forbidden, "User is not a member of this chat", {});
    }
  }

  mustHaveType(type: ChatType) {
    if (this.type !== type) {
      throw error(Errors.InvalidType, "Type does not match", {});
    }
  }

  mustHaveOwner(userId: String) {
    if (this.ownerUserId !== userId) {
      throw error(Errors.Forbidden, "User is not a owner in this chat", {});
    }
  }
}
