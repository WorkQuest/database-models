import { Model } from 'sequelize-typescript';
export declare class Review extends Model {
    id: string;
    questId: string;
    fromUserId: string;
    toUserId: string;
    message: string;
    mark: number;
    avgMark: number;
}
