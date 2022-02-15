import { Model } from "sequelize-typescript";
import { ChatMember } from "./ChatMember";
export declare class ChatsStatistic extends Model {
    id: string;
    memberId: string;
    unreadCountChats: number;
    member: ChatMember;
}
