import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { Media } from '../Media';
import { Review } from './Review';
import { QuestsResponse } from "./QuestsResponse";
import { StarredQuests } from './StarredQuests';
import { LocationPostGISType, LocationType } from "../types";
import { QuestSpecializationFilter } from './QuestSpecializationFilter';
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
    Dispute = 3,
    WaitWorker = 4,
    WaitConfirm = 5,
    Done = 6
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
}
