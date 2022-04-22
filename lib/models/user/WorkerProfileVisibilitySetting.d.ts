import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare class WorkerProfileVisibilitySetting extends Model {
    id: string;
    userId: string;
    ratingStatusCanInviteMeOnQuest: number[];
    ratingStatusInMySearch: number[];
    user: User;
}
