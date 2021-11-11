import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "../user/User";
import { StarredChat } from "./StarredChat";
import { QuestChat } from "./QuestChat";
export declare enum ChatType {
    private = "private",
    group = "group",
    quest = "quest"
}
export declare class Chat extends Model {
    id: string;
    ownerUserId: string;
    lastMessageId: string;
    name: string;
    type: ChatType;
    lastMessageDate: Date;
    userMembers: User[];
    owner: User;
    lastMessage: Message;
    messages: Message[];
    meMember: ChatMember;
    questChat: QuestChat;
    star: StarredChat;
    firstMemberInPrivateChat: ChatMember;
    secondMemberInPrivateChat: ChatMember;
}
