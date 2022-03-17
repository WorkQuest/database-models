import { Model } from 'sequelize-typescript';
import { User } from './User';
import { Priority } from "../types";
export declare enum NetworkProfileVisibility {
    EveryoneOnTheInternet = 0,
    RegisteredUsers = 1,
    SubmittingOffer = 2
}
export declare class ProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    networkProfileVisibility: NetworkProfileVisibility;
    jobPriorityProfileVisibility: Priority;
    user: User;
}
