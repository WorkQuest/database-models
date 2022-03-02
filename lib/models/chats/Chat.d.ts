import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { StarredChat } from "./StarredChat";
import { QuestChat } from "./QuestChat";
import { GroupChat } from "./GroupChat";
import { ChatData } from "./ChatData";
export declare enum ChatType {
    private = "private",
    group = "group",
    quest = "quest"
}
export declare class Chat extends Model {
    id: string;
    type: ChatType;
    messages: Message[];
    members: ChatMember[];
    meMember: ChatMember;
    questChat: QuestChat;
    groupChat: GroupChat;
    chatData: ChatData;
    star: StarredChat;
    firstMemberInPrivateChat: ChatMember;
    secondMemberInPrivateChat: ChatMember;
}
