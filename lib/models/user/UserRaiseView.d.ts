import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { UserRaiseType } from "./types";
export declare enum UserRaiseStatus {
    Paid = 0,
    Unpaid = 1,
    Closed = 2
}
export declare enum UserRaiseDuration {
    OneDay = 1,
    SevenDays = 7,
    ThirtyOneDays = 31
}
export declare class UserRaiseView extends Model {
    id: string;
    userId: string;
    status: UserRaiseStatus;
    duration: UserRaiseDuration;
    type: UserRaiseType;
    user: User;
}
