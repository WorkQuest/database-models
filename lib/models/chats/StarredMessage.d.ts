import { Model } from 'sequelize-typescript';
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
export declare class StarredMessage extends Model {
    id: string;
    memberId: string;
    messageId: string;
    member: ChatMember;
    message: Message;
}
