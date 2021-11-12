import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { Media } from '../Media';
import { Review } from './Review';
import { QuestsResponse } from "./QuestsResponse";
import { StarredQuests } from './StarredQuests';
import { LocationPostGISType, LocationType } from "../types";
import { QuestSpecializationFilter } from './QuestSpecializationFilter';
import { QuestBlockReason } from "./QuestBlockReason";
export declare enum QuestPriority {
    AllPriority = 0,
    Low = 1,
    Normal = 2,
    Urgent = 3
}
export declare enum AdType {
    Free = 0,
    Paid = 1
}
export declare enum QuestStatus {
    Created = 0,
    Active = 1,
    Closed = 2,
    Reject = 3,
    Dispute = 4,
    WaitWorker = 5,
    WaitConfirm = 6,
    Done = 7,
    isBlocked = 8
}
export declare enum QuestWorkPlace {
    Distant = "distant",
    Office = "office",
    Both = "both"
}
export declare enum QuestEmployment {
    FullTime = "fullTime",
    PartTime = "partTime",
    FixedTerm = "fixedTerm"
}
export declare class Quest extends Model {
    id: string;
    userId: string;
    assignedWorkerId: string;
    title: string;
    description: string;
    status: QuestStatus;
    workplace: QuestWorkPlace;
    employment: QuestEmployment;
    priority: QuestPriority;
    category: string;
    locationPlaceName: string;
    location: LocationType;
    locationPostGIS: LocationPostGISType;
    price: string;
    adType: AdType;
    medias: Media[];
    user: User;
    assignedWorker: User;
    star: StarredQuests;
    response: QuestsResponse;
    responded: QuestsResponse;
    invited: QuestsResponse;
    questIndustryForFiltering: QuestSpecializationFilter;
    questSpecializationForFiltering: QuestSpecializationFilter;
    questSpecializations: QuestSpecializationFilter[];
    reviews: Review[];
    starredQuests: StarredQuests[];
    responses: QuestsResponse[];
    blockReasons: QuestBlockReason[];
    mustHaveStatus(...statuses: QuestStatus[]): void;
    mustBeAppointedOnQuest(workerId: string): void;
    mustBeQuestCreator(userId: String): void;
    mustBeQuestWorker(userId: String): void;
    mustBeUnblock(status: QuestStatus): void;
}
