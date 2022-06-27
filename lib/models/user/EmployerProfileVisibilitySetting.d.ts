import { User } from './User';
import { Model } from 'sequelize-typescript';
export declare class EmployerProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    ratingStatusCanRespondToQuest: number;
    ratingStatusInMySearch: number;
    arrayRatingStatusCanRespondToQuest: number[];
    arrayRatingStatusInMySearch: number[];
    user: User;
}
