import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  HasMany,
  BelongsToMany,
  Scopes, HasOne,
} from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "../user/User";
import { error, getUUID } from "../../utils";
import { Errors } from "../../utils/errors";

export enum ChatType {
  private = 'private',
  group = 'group',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["messages", "updatedAt"]
    },
    include: [{
      model: User.scope('shortWithAdditionalInfo'),
      as: 'owner'
    }, {
      model: Message,
      as: 'lastMessage'
    }, {
      model: User.scope('shortWithAdditionalInfo'),
      as: 'members',
      through: { attributes: [] }
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

  @Column({type: DataType.STRING, defaultValue: null}) name: string; /* If group chat */
  @Column({type: DataType.STRING, allowNull: false}) type: ChatType;
  @Column({type: DataType.DATE, defaultValue: null}) lastMessageDate: Date;

  @BelongsToMany(() => User, () => ChatMember) members: User[];
  @BelongsTo(() => User) owner: User;
  @BelongsTo(() => Message, { foreignKey: 'lastMessageId', constraints: false }) lastMessage: Message;

  @HasMany(() => Message) messages: Message[];
  @HasMany(() => ChatMember) chatMembers: ChatMember[];

  /** Aliases for Queries */
  @HasOne(() => ChatMember) firstMemberInPrivateChat: ChatMember;
  @HasOne(() => ChatMember) secondMemberInPrivateChat: ChatMember;

  async mustHaveMember(userId: string) {
    const member = await ChatMember.findOne({
      where: { chatId: this.id, userId }
    });

    if (!member) {
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
