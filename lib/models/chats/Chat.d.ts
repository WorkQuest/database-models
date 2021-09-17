import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "../User";
export declare enum ChatType {
    private = "private",
    group = "group"
}
export declare class Chat extends Model {
    id: string;
    ownerUserId: string;
    lastMessageId: string;
    lastMessage: object;
    name: string;
    type: ChatType;
    lastMessageDate: Date;
    members: User[];
    owner: User;
    messages: Message[];
    chatMembers: ChatMember[];
    firstMemberInPrivateChat: ChatMember;
    secondMemberInPrivateChat: ChatMember;
    mustHaveMember(userId: string): Promise<void>;
    mustHaveType(type: ChatType): void;
    mustHaveOwner(userId: String): void;
}
