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
import { AdminChatMember } from "./AdminChatMember";
import { error, getUUID } from "../../utils";
import { Errors } from "../../utils/errors";
import {Admin} from "../Admin";

export enum ChatType {
  private = 0,
  group,
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["messages", "updatedAt"]
    },
    include: [{
      model: Admin.scope('short'),
      as: 'owner'
    }]
  }
}))
@Table
export class AdminChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Admin) /* If group chat */
  @Column({type: DataType.STRING, defaultValue: null}) ownerAdminId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, defaultValue: null}) lastMessageId: string;

  @Column({type: DataType.STRING, defaultValue: null}) name: Date; /* If group chat */
  @Column(DataType.DATE) lastMessageDate: Date;
  @Column({type: DataType.INTEGER, allowNull: false}) type: ChatType;

  @BelongsToMany(() => Admin, () => AdminChatMember) members: Admin[];
  @BelongsTo(() => Admin) owner: Admin;
  @BelongsTo(() => Message, {foreignKey: 'lastMessageId', constraints: false}) lastMessage: Message;

  @HasMany(() => Message) messages: Message[];
  @HasMany(() => AdminChatMember) adminChatMember: AdminChatMember[];

  async mustHaveMember(adminId: string) {
    const member = await AdminChatMember.findOne({
      where: { chatId: this.id, adminId }
    });

    if (!member) {
      throw error(Errors.Forbidden, "Admin is not a member of this chat", {});
    }
  }

  mustHaveType(type: ChatType) {
    if (this.type !== type) {
      throw error(Errors.InvalidType, "Type does not match", {});
    }
  }

  mustHaveOwner(adminId: String) {
    if (this.ownerAdminId !== adminId) {
      throw error(Errors.Forbidden, "Admin is not a owner in this chat", {});
    }
  }
}
