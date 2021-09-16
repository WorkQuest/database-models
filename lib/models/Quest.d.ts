import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { Media } from './Media';
import { Review } from './Review';
import { QuestsResponse } from "./QuestsResponse";
import { StarredQuests } from './StarredQuests';
import { SkillFilter, SkillsMap } from "./SkillFilter";
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
export declare enum QuestWorkPlacement {
    Distant = 0,
    Office = 1,
    Both = 2
}
export interface Location {
    longitude: number;
    latitude: number;
}
export declare class Quest extends Model {
    id: string;
    userId: string;
    assignedWorkerId: string;
    status: QuestStatus;
    placement: QuestWorkPlacement;
    priority: QuestPriority;
    category: string;
    locationPlaceName: string;
    location: Location;
    locationPostGIS: any;
    title: string;
    description: string;
    price: string;
    adType: AdType;
    skillFilters?: SkillsMap;
    medias: Media[];
    user: User;
    assignedWorker: User;
    star: StarredQuests;
    response: QuestsResponse;
    filterBySkillFilter: SkillFilter;
    starredQuests: StarredQuests[];
    responses: QuestsResponse[];
    reviews: Review[];
    questSkillFilters: SkillFilter[];
    updateFieldLocationPostGIS(): void;
    mustHaveStatus(...statuses: QuestStatus[]): void;
    mustBeAppointedOnQuest(workerId: string): void;
    mustBeQuestCreator(userId: String): void;
}
