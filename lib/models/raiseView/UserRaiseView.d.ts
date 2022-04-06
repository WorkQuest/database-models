import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
export declare enum UserRaiseStatus {
    Paid = 0,
    Closed = 1
}
export declare enum UserRaiseDuration {
    OneDay = 1,
    SevenDays = 7,
    ThirtyOneDays = 31
}
export declare enum UserRaiseType {
    GoldPlus = 0,
    Gold = 1,
    Silver = 2,
    Bronze = 3
}
export declare class UserRaiseView extends Model {
    id: string;
    userId: string;
    status: UserRaiseStatus;
    duration: UserRaiseDuration;
    type: UserRaiseType;
    endedAt: Date;
    user: User;
}
