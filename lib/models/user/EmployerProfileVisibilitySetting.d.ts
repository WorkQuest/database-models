import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare class EmployerProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    ratingStatusCanRespondToQuest: number;
    ratingStatusInMySearch: number;
    user: User;
}
