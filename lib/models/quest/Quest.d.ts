import { User } from "../user/User";
import { Media } from '../Media';
import { Review } from './Review';
import { QuestsResponse } from "./QuestsResponse";
import { StarredQuests } from './StarredQuests';
import { LocationPostGIS, Location, Priority, WorkPlace } from "../types";
import { QuestSpecializationFilter } from './QuestSpecializationFilter';
import { QuestChat } from "../chats/QuestChat";
import { QuestStatus, QuestEmployment, AdType } from "./types";
import { Model } from 'sequelize-typescript';
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
    category: string;
    locationPlaceName: string;
    location: Location;
    locationPostGIS: LocationPostGIS;
    price: string;
    adType: AdType;
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
    questSpecializations: QuestSpecializationFilter[];
    reviews: Review[];
    starredQuests: StarredQuests[];
    responses: QuestsResponse[];
}
