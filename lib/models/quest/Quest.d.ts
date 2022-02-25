import { User } from "../user/User";
import { Media } from '../Media';
import { Review } from './Review';
import { QuestsResponse } from "./QuestsResponse";
import { StarredQuests } from './StarredQuests';
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
    Dispute = -2,
    Blocked = -1,
    Pending = 0,
    Recruitment = 1,
    WaitingForConfirmFromWorkerOnAssign = 2,
    WorkerAcceptedQuestAssignment = 3,
    ExecutionOfWork = 4,
    WaitingEmployerConfirm = 5,
    Completed = 6,
    Closed = 7
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
    title: string;
    description: string;
    nonce: string;
    status: QuestStatus;
    workplace: WorkPlace;
    employment: QuestEmployment;
    priority: Priority;
    category: string;
    locationPlaceName: string;
    location: LocationType;
    locationPostGIS: LocationPostGISType;
    price: string;
    adType: AdType;
    startedAt: Date;
    user: User;
    assignedWorker: User;
    medias: Media[];
    questChat: QuestChat;
    star: StarredQuests;
    response: QuestsResponse;
    responded: QuestsResponse;
    invited: QuestsResponse;
    questIndustryForFiltering: QuestSpecializationFilter;
    questSpecializationForFiltering: QuestSpecializationFilter;
    yourReview: Review;
    openDispute: QuestDispute;
    questSpecializations: QuestSpecializationFilter[];
    questDisputes: QuestDispute[];
    reviews: Review[];
    starredQuests: StarredQuests[];
    responses: QuestsResponse[];
}
