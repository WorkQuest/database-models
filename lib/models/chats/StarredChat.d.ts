import { Model } from 'sequelize-typescript';
import { Chat } from './Chat';
import { ChatMember } from "./ChatMember";
export declare class StarredChat extends Model {
    id: string;
    memberId: string;
    chatId: string;
    member: ChatMember;
    chat: Chat;
}
