import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "./User";
export declare enum ChatType {
    private = 0,
    group = 1
}
export declare class Chat extends Model {
    id: string;
    ownerUserId: string;
    lastMessageId: string;
    name: Date;
    lastMessageDate: Date;
    type: ChatType;
    members: User[];
    owner: User;
    lastMessage: Message;
    messages: Message[];
    chatMembers: ChatMember[];
    otherMember: User;
    mustHaveMember(userId: string): Promise<void>;
    mustHaveType(type: ChatType): void;
    mustHaveOwner(userId: String): void;
}
