import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Quest } from './Quest';
export declare class StarredQuests extends Model {
    id: string;
    userId: string;
    questId: string;
    user: User;
    quest: Quest;
}
