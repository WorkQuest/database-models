import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "./User";
import { StarredChat } from "./StarredChat";
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
    starredChat: StarredChat;
    messages: Message[];
    chatMembers: ChatMember[];
    otherChatMember: ChatMember;
    static chatMustExists(chatId: string): Promise<void>;
    mustHaveMember(userId: string): Promise<void>;
    mustHaveType(type: ChatType): void;
    mustHaveOwner(userId: String): void;
}
