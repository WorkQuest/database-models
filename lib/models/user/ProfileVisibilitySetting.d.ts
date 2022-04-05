import { Model } from 'sequelize-typescript';
import { User } from './User';
import { RatingStatus } from "../types";
export declare enum NetworkProfileVisibility {
    AllUsers = 0,
    SubmittingOffer = 1
}
export declare class ProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    network: NetworkProfileVisibility;
    ratingStatus: RatingStatus;
    user: User;
}
