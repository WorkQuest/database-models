import { Model } from "sequelize-typescript";
import { Media } from "./Media";
import { Message } from "./Message";
export declare class MessageMedia extends Model {
    id: string;
    mediaId: string;
    messageId: string;
    media: Media;
    message: Message;
}
