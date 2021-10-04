import { Model } from 'sequelize-typescript';
export declare class ProlongedQuest extends Model {
    id: string;
    questId: string;
    prolongedTill: Date;
}
