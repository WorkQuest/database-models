import { Model } from 'sequelize-typescript';
import { User } from './User';
import { Quest } from './Quest';
export declare enum QuestsResponseStatus {
    Rejected = -1,
    Open = 0,
    Accepted = 1,
    Closed = 2
}
export declare enum QuestsResponseType {
    Response = 0,
    Invite = 1
}
export declare class QuestsResponse extends Model {
    id: string;
    workerId: string;
    questId: string;
    status: QuestsResponseStatus;
    type: QuestsResponseType;
    message: string;
    worker: User;
    quest: Quest;
    mustBeInvitedToQuest(workerId: String): void;
    mustHaveStatus(status: QuestsResponseStatus): void;
    mustHaveType(type: QuestsResponseType): void;
}
