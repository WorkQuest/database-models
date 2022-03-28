import { Model } from 'sequelize-typescript';
import { User } from './User';
import { Priority } from "../types";
export declare enum NetworkProfileVisibility {
    AllUsers = 0,
    SubmittingOffer = 1
}
export declare class ProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    networkProfileVisibility: NetworkProfileVisibility;
    jobPriorityProfileVisibility: Priority;
    user: User;
}
