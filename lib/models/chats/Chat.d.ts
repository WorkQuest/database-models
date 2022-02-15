import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { StarredChat } from "./StarredChat";
import { QuestChat } from "./QuestChat";
import { GroupChat } from "./GroupChat";
export declare enum ChatType {
    private = "private",
    group = "group",
    quest = "quest"
}
export declare class Chat extends Model {
    id: string;
    lastMessageId: string;
    type: ChatType;
    lastMessageDate: Date;
    lastMessage: Message;
    messages: Message[];
    members: ChatMember[];
    meMember: ChatMember;
    questChat: QuestChat;
    groupChat: GroupChat;
    star: StarredChat;
    firstMemberInPrivateChat: ChatMember;
    secondMemberInPrivateChat: ChatMember;
}
