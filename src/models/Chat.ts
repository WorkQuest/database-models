import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  HasMany,
  BelongsToMany
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

@Table
export class Chat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) creatorUserId: string;

  @Column({type: DataType.INTEGER, allowNull: false}) type: ChatType;
  // @Column({type: DataType.BOOLEAN, defaultValue: true}) isPrivate: boolean; // TODO ??

  @BelongsTo(() => User) creator: User;

  @HasMany(() => Message) message: Message[];

  @BelongsToMany(() => User, () => ChatMember) members: ChatMember[];

  mustHaveMember(userId: String) {
    if (this.members.some(user => user.id === userId)) {
      throw error(Errors.Forbidden, "User is not a member of this chat", {});
    }
  }
}
