import { Model } from 'sequelize-typescript';
import { Quest } from "./Quest";
export declare class ProlongedQuest extends Model {
    id: string;
    questId: string;
    prolongedTill: Date;
    quest: Quest;
}
