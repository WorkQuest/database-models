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
    creatorUserId: string;
    lastMessageId: string;
    lastMessageDate: Date;
    type: ChatType;
    members: User[];
    creator: User;
    lastMessage: Message;
    messages: Message[];
    chatMembers: ChatMember[];
    mustHaveMember(userId: String): void;
}
