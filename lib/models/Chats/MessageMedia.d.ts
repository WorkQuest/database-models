import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { Message } from "./Message";
import { AdminMessage } from "./AdminMessage";
export declare class MessageMedia extends Model {
    id: string;
    mediaId: string;
    messageId: string;
    adminMessageId: string;
    media: Media;
    message: Message;
    adminMessage: AdminMessage;
}
