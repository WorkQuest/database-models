import { User } from './User';
import { Model } from 'sequelize-typescript';
export declare class WorkerProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    ratingStatusCanInviteMeOnQuest: number;
    ratingStatusInMySearch: number;
    arrayRatingStatusCanInviteMeOnQuest: number[];
    arrayRatingStatusInMySearch: number[];
    user: User;
}
