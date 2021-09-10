import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { StarredChat } from "../StarredChat";
import { User } from "../User";
export declare enum ChatType {
    private = "private",
    group = "group"
}
export declare class Chat extends Model {
    id: string;
    ownerUserId: string;
    lastMessageId: string;
    name: string;
    type: ChatType;
    lastMessageDate: Date;
    members: User[];
    owner: User;
    lastMessage: Message;
    starredChat: StarredChat;
    messages: Message[];
    chatMembers: ChatMember[];
    firstMemberInPrivateChat: ChatMember;
    secondMemberInPrivateChat: ChatMember;
    static chatMustExists(chatId: string): Promise<void>;
    mustHaveMember(userId: string): Promise<void>;
    mustHaveType(type: ChatType): void;
    mustHaveOwner(userId: String): void;
}
