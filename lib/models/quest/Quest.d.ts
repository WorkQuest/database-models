import { User } from "../user/User";
import { Media } from '../Media';
import { QuestsReview } from './QuestsReview';
import { QuestsResponse } from "./QuestsResponse";
import { QuestsStarred } from './QuestsStarred';
import { LocationPostGISType, LocationType, Priority, WorkPlace } from "../types";
import { QuestSpecializationFilter } from './QuestSpecializationFilter';
import { QuestChat } from "../chats/QuestChat";
import { Model } from 'sequelize-typescript';
import { QuestDispute } from "./QuestDispute";
export declare enum AdType {
    Free = 0,
    Paid = 1
}
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
    FullTime = "fullTime",
    PartTime = "partTime",
    FixedTerm = "fixedTerm"
}
export declare const activeFlowStatuses: QuestStatus[];
export declare class Quest extends Model {
    id: string;
    userId: string;
    assignedWorkerId: string;
    contractAddress: string;
    nonce: string;
    status: QuestStatus;
    description: string;
    title: string;
    price: string;
    workplace: WorkPlace;
    adType: AdType;
    employment: QuestEmployment;
    priority: Priority;
    location: LocationType;
    locationPlaceName: string;
    locationPostGIS: LocationPostGISType;
    startedAt: Date;
    user: User;
    assignedWorker: User;
    medias: Media[];
    questChat: QuestChat;
    star: QuestsStarred;
    response: QuestsResponse;
    responded: QuestsResponse;
    invited: QuestsResponse;
    questIndustryForFiltering: QuestSpecializationFilter;
    questSpecializationForFiltering: QuestSpecializationFilter;
    yourReview: QuestsReview;
    openDispute: QuestDispute;
    questSpecializations: QuestSpecializationFilter[];
    questDisputes: QuestDispute[];
    reviews: QuestsReview[];
    starredQuests: QuestsStarred[];
    responses: QuestsResponse[];
}
