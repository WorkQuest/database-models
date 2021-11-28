import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { Session } from "./Session";
import { Review } from "../quest/Review";
import { RatingStatistic } from "./RatingStatistic";
import { ChatMember } from "../chats/ChatMember";
import { LocationPostGISType, LocationType, WorkPlace } from "../types";
import { UserSpecializationFilter } from "./UserSpecializationFilter";
import { DiscussionLike } from "../discussion/DiscussionLike";
import { DiscussionCommentLike } from "../discussion/DiscussionCommentLike";
import { Chat } from "../chats/Chat";
export interface SocialInfo {
    id: string;
    email: string;
    last_name: string;
    first_name: string;
}
export interface UserSocialSettings {
    google?: SocialInfo;
    facebook?: SocialInfo;
    twitter?: SocialInfo;
    linkedin?: SocialInfo;
}
export interface TOTP {
    confirmCode: string | null;
    active: boolean;
    secret: string | null;
}
export interface Security {
    TOTP: TOTP;
}
interface UserSettings {
    restorePassword: string | null;
    emailConfirm: string | null;
    phoneConfirm: string | null;
    social: UserSocialSettings;
    security: Security;
}
export declare const defaultUserSettings: UserSettings;
export declare enum UserStatus {
    Unconfirmed = 0,
    Confirmed = 1,
    NeedSetRole = 2
}
export declare enum UserRole {
    Employer = "employer",
    Worker = "worker"
}
export declare enum StatusKYC {
    Unconfirmed = 0,
    Confirmed = 1
}
interface SocialMediaNicknames {
    instagram: string | null;
    twitter: string | null;
    linkedin: string | null;
    facebook: string | null;
}
interface AdditionalInfo {
    description: string | null;
    secondMobileNumber: string | null;
    address: string | null;
    socialNetwork: SocialMediaNicknames;
}
interface Knowledge {
    from: string;
    to: string;
    place: string;
}
interface WorkExperience {
    from: string;
    to: string;
    place: string;
}
export interface AdditionalInfoWorker extends AdditionalInfo {
    skills: string[];
    educations: Knowledge[] | null;
    workExperiences: WorkExperience[] | null;
}
export interface AdditionalInfoEmployer extends AdditionalInfo {
    company: string | null;
    CEO: string | null;
    website: string | null;
}
export declare class User extends Model {
    id: string;
    avatarId: string;
    firstName: string;
    lastName: string;
    location: LocationType;
    email: string;
    role: UserRole;
    additionalInfo: object;
    password: string;
    phone: string;
    tempPhone: string;
    settings: UserSettings;
    status: UserStatus;
    statusKYC: StatusKYC;
    wagePerHour: string;
    workplace: WorkPlace;
    locationPostGIS: LocationPostGISType;
    ratingStatistic: RatingStatistic;
    avatar: Media;
    sessions: Session[];
    reviews: Review[];
    medias: Media[];
    userSpecializations: UserSpecializationFilter[];
    chatOfUser: Chat;
    chatMember: ChatMember;
    userIndustryForFiltering: UserSpecializationFilter;
    userSpecializationForFiltering: UserSpecializationFilter;
    chatsOfUser: Chat[];
    chatMembers: ChatMember[];
    discussionLikes: DiscussionLike[];
    commentLikes: DiscussionCommentLike[];
    passwordCompare(pwd: string): Promise<boolean>;
    static findWithEmail(email: string): Promise<User>;
    static findWithSocialId(network: string, id: string): Promise<User>;
    static userMustExist(userId: string): Promise<void>;
    static usersMustExist(userIds: string[]): Promise<void>;
    isTOTPEnabled(): boolean;
}
export {};
