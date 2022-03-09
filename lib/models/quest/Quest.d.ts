import { User } from "../user/User";
import { Media } from '../Media';
import { QuestsReview } from './QuestsReview';
import { QuestsResponse } from "./QuestsResponse";
import { QuestsStarred } from './QuestsStarred';
import { LocationPostGISType, LocationType, Priority, WorkPlace } from "../types";
import { QuestSpecializationFilter } from './QuestSpecializationFilter';
import { QuestChat } from "../chats/QuestChat";
import { Model } from 'sequelize-typescript';
import { QuestRaiseView } from "./QuestRaiseView";
import { QuestDispute } from "./QuestDispute";
export declare enum QuestStatus {
    Blocked = -1,
    Created = 0,
    Active = 1,
    Closed = 2,
    Dispute = 3,
    WaitWorker = 4,
    WaitConfirm = 5,
    Done = 6
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
    status: QuestStatus;
    workplace: WorkPlace;
    employment: QuestEmployment;
    priority: Priority;
    locationPlaceName: string;
    location: LocationType;
    locationPostGIS: LocationPostGISType;
    price: string;
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
    raiseView: QuestRaiseView;
    yourReview: QuestsReview;
    openDispute: QuestDispute;
    questSpecializations: QuestSpecializationFilter[];
    questDisputes: QuestDispute[];
    reviews: QuestsReview[];
    starredQuests: QuestsStarred[];
    responses: QuestsResponse[];
}
