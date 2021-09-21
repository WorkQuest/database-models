import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { Session } from "./Session";
import { Review } from "../quest/Review";
import { RatingStatistic } from "./RatingStatistic";
import { SkillFilter, SkillsMap } from "../SkillFilter";
import { ChatMember } from "../chats/ChatMember";
import { LocationPostGISType, LocationType } from "../types";
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
    password: string;
    firstName: string;
    lastName: string;
    additionalInfo: object;
    email: string;
    role: UserRole;
    settings: UserSettings;
    status: UserStatus;
    statusKYC: StatusKYC;
    tempPhone: string;
    phone: string;
    location: LocationType;
    locationPostGIS: LocationPostGISType;
    skillFilters?: SkillsMap;
    avatar: Media;
    ratingStatistic: RatingStatistic;
    reviews: Review[];
    sessions: Session[];
    medias: Media[];
    userSkillFilters: SkillFilter[];
    chatMember: ChatMember;
    chatMembers: ChatMember[];
    passwordCompare(pwd: string): Promise<boolean>;
    static findWithEmail(email: string): Promise<User>;
    static findWithSocialId(network: string, id: string): Promise<User>;
    static userMustExist(userId: string): Promise<void>;
    static usersMustExist(userIds: string[]): Promise<void>;
    mustHaveRole(role: UserRole): void;
    mustHaveActiveStatusTOTP(activeStatus: boolean): void;
    isTOTPEnabled(): boolean;
    validateTOTP(TOTP: string): void;
}
export declare function getDefaultAdditionalInfo(role: UserRole): object;
export {};