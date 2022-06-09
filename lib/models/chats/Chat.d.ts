import { ChatData } from "./ChatData";
import { GroupChat } from "./GroupChat";
import { QuestChat } from "./QuestChat";
import { ChatMember } from "./ChatMember";
import { StarredChat } from "./StarredChat";
import { Model } from "sequelize-typescript";
export declare enum ChatType {
    Private = "Private",
    Group = "Group",
    Quest = "Quest"
}
export declare class Chat extends Model {
    id: string;
    type: ChatType;
    members: ChatMember[];
    meMember: ChatMember;
    questChat: QuestChat;
    groupChat: GroupChat;
    chatData: ChatData;
    star: StarredChat;
    senderInPrivateChat: ChatMember;
    recipientInPrivateChat: ChatMember;
    firstMemberInPrivateChat: ChatMember;
    secondMemberInPrivateChat: ChatMember;
}
