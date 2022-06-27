import { Media } from '../Media';
import { User } from "../user/User";
import { QuestsReview } from './QuestsReview';
import { QuestChat } from "../chats/QuestChat";
import { QuestsStarred } from './QuestsStarred';
import { QuestsResponse } from "./QuestsResponse";
import { QuestRaiseView } from "../raise-view/QuestRaiseView";
import { QuestDispute } from "./QuestDispute";
import { QuestSpecializationFilter } from './QuestSpecializationFilter';
import { Priority, WorkPlace, PayPeriod, LocationType, LocationPostGISType } from "../types";
import { Model } from 'sequelize-typescript';
export declare enum QuestStatus {
    Closed = -3,
    Dispute = -2,
    Blocked = -1,
    Pending = 0,
    Recruitment = 1,
    WaitingForConfirmFromWorkerOnAssign = 2,
    ExecutionOfWork = 3,
    WaitingForEmployerConfirmationWork = 4,
    Completed = 5
}
export declare enum QuestEmployment {
    FullTime = "FullTime",
    PartTime = "PartTime",
    FixedTerm = "FixedTerm",
    RemoteWork = "RemoteWork",
    EmploymentContract = "EmploymentContract"
}
export declare const activeFlowStatuses: QuestStatus[];
export declare class Quest extends Model {
    id: string;
    userId: string;
    avatarId: string;
    assignedWorkerId: string;
    contractAddress: string;
    nonce: string;
    status: QuestStatus;
    title: string;
    description: string;
    price: string;
    payPeriod: PayPeriod;
    workplace: WorkPlace;
    typeOfEmployment: QuestEmployment;
    priority: Priority;
    location: LocationType;
    locationPlaceName: string;
    locationPostGIS: LocationPostGISType;
    startedAt: Date;
    user: User;
    assignedWorker: User;
    avatar: Media;
    medias: Media[];
    questChat: QuestChat;
    star: QuestsStarred;
    response: QuestsResponse;
    responded: QuestsResponse;
    invited: QuestsResponse;
    questIndustryForFiltering: QuestSpecializationFilter;
    questSpecializationForFiltering: QuestSpecializationFilter;
    raiseView: QuestRaiseView;
    yourReview: QuestsReview;
    openDispute: QuestDispute;
    questSpecializations: QuestSpecializationFilter[];
    questDisputes: QuestDispute[];
    reviews: QuestsReview[];
    starredQuests: QuestsStarred[];
    responses: QuestsResponse[];
}
