import { Model } from 'sequelize-typescript';
import { User } from './User';
import { RatingStatus } from "../types";
export declare class WorkerProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    ratingStatusCanInviteMeOnQuest: RatingStatus[];
    ratingStatusInMySearch: RatingStatus[];
    user: User;
}
