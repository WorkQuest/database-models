import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { UserRaiseDuration, UserRaiseStatus, UserRaiseType } from "./types";
export declare class UserRaiseView extends Model {
    id: string;
    userId: string;
    status: UserRaiseStatus;
    duration: UserRaiseDuration;
    type: UserRaiseType;
    endedAt: Date;
    user: User;
}
