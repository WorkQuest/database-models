import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Quest } from './Quest';
export declare class Review extends Model {
    id: string;
    questId: string;
    fromUserId: string;
    toUserId: string;
    message: string;
    mark: number;
    fromUser: User;
    toUser: User;
    quest: Quest;
    avgMark: number;
}
