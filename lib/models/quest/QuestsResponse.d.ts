import { User } from '../user/User';
import { Quest } from './Quest';
import { QuestChat } from "../chats/QuestChat";
import { Media } from "../Media";
import { QuestsResponseStatus, QuestsResponseType } from "./types";
import { Model } from 'sequelize-typescript';
export declare class QuestsResponse extends Model {
    id: string;
    workerId: string;
    questId: string;
    status: QuestsResponseStatus;
    type: QuestsResponseType;
    message: string;
    worker: User;
    quest: Quest;
    medias: Media[];
    questChat: QuestChat;
}
