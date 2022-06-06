import { Message } from "./Message";
import { User } from "../user/User";
import { Model } from "sequelize-typescript";
export declare class ChatDeletionData extends Model {
    id: string;
    userId: string;
    beforeDeletionMessageId: string;
    beforeDeletionMessageNumber: string;
    chatMember: User;
    beforeDeletionMessage: Message;
}
