import { Model } from 'sequelize-typescript';
import { Media } from '../Media';
import { Quest } from './Quest';
export declare class QuestMedia extends Model {
    id: string;
    mediaId: string;
    questId: string;
    media: Media;
    quest: Quest;
}
