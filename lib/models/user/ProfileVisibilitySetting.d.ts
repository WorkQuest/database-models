import { Model } from 'sequelize-typescript';
import { User } from './User';
import { NetworkProfileVisibilityType, Priority } from "../types";
export declare class ProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    networkProfileVisibility: NetworkProfileVisibilityType;
    jobPriorityProfileVisibility: Priority;
    user: User;
}
