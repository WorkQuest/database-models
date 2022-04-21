import { Model } from 'sequelize-typescript';
import { User } from './User';
import { RatingStatus } from "../types";
export declare class EmployerProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    ratingStatusCanRespondOnQuest: RatingStatus;
    ratingStatusInMySearch: RatingStatus;
    user: User;
}
