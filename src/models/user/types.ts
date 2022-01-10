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

export interface UserSettings {
  restorePassword: string | null;
  emailConfirm: string | null;
  phoneConfirm: string | null;
  social: UserSocialSettings;
  security: Security;
}

export enum UserStatus {
  Unconfirmed,
  Confirmed,
  NeedSetRole,
}

export enum UserRole {
  Employer = "employer",
  Worker = "worker",
}

export enum StatusKYC {
  Unconfirmed = 0,
  Confirmed,
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
  skills: string[]; // TODO remove
  educations: Knowledge[] | null;
  workExperiences: WorkExperience[] | null;
}

export interface AdditionalInfoEmployer extends AdditionalInfo {
  company: string | null;
  CEO: string | null;
  website: string | null;
}

export type UserLoginPlace = {
  country: string | null;
  city: string | null;
}

export enum RatingStatus {
  noStatus = "noStatus",
  verified = "verified",
  reliable = "reliable",
  topRanked = "topRanked",
}


