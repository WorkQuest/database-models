import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { AdminChatMember } from "./AdminChatMember";
import { Admin } from "../Admin";
export declare enum ChatType {
    private = 0,
    group = 1
}
export declare class AdminChat extends Model {
    id: string;
    ownerAdminId: string;
    lastMessageId: string;
    name: Date;
    lastMessageDate: Date;
    type: ChatType;
    members: Admin[];
    owner: Admin;
    lastMessage: Message;
    messages: Message[];
    adminChatMember: AdminChatMember[];
    mustHaveMember(adminId: string): Promise<void>;
    mustHaveType(type: ChatType): void;
    mustHaveOwner(adminId: String): void;
}
