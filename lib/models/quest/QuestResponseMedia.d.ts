import { Model } from 'sequelize-typescript';
import { Media } from '../Media';
import { QuestsResponse } from "./QuestsResponse";
export declare class QuestResponseMedia extends Model {
    id: string;
    mediaId: string;
    questResponseId: string;
    media: Media;
    questResponse: QuestsResponse;
}
