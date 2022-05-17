"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const admin_1 = require("./admin");
const media_1 = require("./media");
const wallet_1 = require("./wallet");
const specialization_1 = require("./specialization");
const models_1 = require("../models");
const statistics_1 = require("./statistics");
const common_1 = require("./common");
exports.userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
exports.userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
exports.userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
exports.userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
exports.userTotpIsActiveSchema = Joi.boolean().example(true).label('UserTotpIsActive');
exports.userStatusSchema = Joi.number().valid(...Object.keys(models_1.UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserStatus.Unconfirmed).label("UserStatus");
exports.userStatusKycSchema = Joi.number().valid(...Object.keys(models_1.StatusKYC).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.StatusKYC.Confirmed).label("UserStatusKyc");
exports.userRoleSchema = Joi.string().valid(...Object.values(models_1.UserRole)).example(models_1.UserRole.Worker).label("UserRole");
exports.workerCostPerHourSchema = Joi.string().example("123").label('WorkerCostPerHour');
exports.userSocialMediaNicknamesSchema = Joi.object({
    instagram: Joi.string().allow(null).label('Instagram'),
    twitter: Joi.string().allow(null).label('Twitter'),
    linkedin: Joi.string().allow(null).label('Linkedin'),
    facebook: Joi.string().allow(null).label('Facebook'),
}).label('SocialMediaNicknames');
exports.ratingStatusCanInviteMeOnQuestSchema = Joi.number().valid(...Object.keys(models_1.RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.RatingStatus.AllStatuses).label("RatingStatusCanInviteMeOnQuest");
exports.ratingStatusesCanInviteMeOnQuestSchema = Joi.array().items(exports.ratingStatusCanInviteMeOnQuestSchema).label("RatingStatusesCanInviteMeOnQuest");
exports.ratingStatusCanRespondToQuestSchema = Joi.number().valid(...Object.keys(models_1.RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.RatingStatus.AllStatuses).label("RatingStatusCanRespondToQuest");
exports.ratingStatusesCanRespondToQuestSchema = Joi.array().items(exports.ratingStatusCanRespondToQuestSchema).label("RatingStatusesCanRespondToQuest");
exports.ratingStatusInMySearchSchema = Joi.number().valid(...Object.keys(models_1.RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.RatingStatus.AllStatuses).label("RatingStatusInMySearch");
exports.ratingStatusesInMySearchSchema = Joi.array().items(exports.ratingStatusInMySearchSchema).label("RatingStatusesInMySearch");
exports.workerProfileVisibilitySettingsSchema = Joi.object({
    ratingStatusCanInviteMeOnQuest: exports.ratingStatusesCanInviteMeOnQuestSchema.unique().min(1).max(4).required(),
    ratingStatusInMySearch: exports.ratingStatusesInMySearchSchema.unique().min(1).max(4).required(),
}).label('WorkerProfileVisibilitySettings');
exports.employerProfileVisibilitySettingsSchema = Joi.object({
    ratingStatusCanRespondToQuest: exports.ratingStatusesCanRespondToQuestSchema.unique().min(1).max(4).required(),
    ratingStatusInMySearch: exports.ratingStatusesInMySearchSchema.unique().min(1).max(4).required(),
}).label('EmployerProfileVisibilitySettings');
exports.workerProfileVisibilitySettingsForGetMeSchema = Joi.object({
    arrayRatingStatusCanInviteMeOnQuest: exports.ratingStatusesCanInviteMeOnQuestSchema.unique().min(1).max(4).required(),
    arrayRatingStatusInMySearch: exports.ratingStatusesInMySearchSchema.unique().min(1).max(4).required(),
}).label('WorkerProfileVisibilitySettings');
exports.employerProfileVisibilitySettingsForGetMeSchema = Joi.object({
    arrayRatingStatusCanRespondToQuest: exports.ratingStatusesCanRespondToQuestSchema.unique().min(1).max(4).required(),
    arrayRatingStatusInMySearch: exports.ratingStatusesInMySearchSchema.unique().min(1).max(4).required(),
}).label('EmployerProfileVisibilitySettings');
exports.userKnowledgeSchema = Joi.object({
    from: Joi.string().label('From'),
    to: Joi.string().label('To'),
    place: Joi.string().label('Place'),
}).label('Knowledge');
exports.userWorkExperienceSchema = Joi.object({
    from: Joi.string().label('From'),
    to: Joi.string().label('To'),
    place: Joi.string().label('Place'),
}).label('WorkExperience');
exports.userAdditionalInfoWorkerSchema = Joi.object({
    secondMobileNumber: common_1.phoneSchema.allow(null),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
    educations: Joi.array().items(exports.userKnowledgeSchema).default([]).label('Educations'),
    workExperiences: Joi.array().items(exports.userWorkExperienceSchema).default([]).label('WorkExperiences'),
    description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');
exports.userAdditionalInfoEmployerSchema = Joi.object({
    secondMobileNumber: common_1.phoneSchema.allow(null),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    description: Joi.string().allow(null).label("Description"),
    company: Joi.string().allow(null).label('Company'),
    CEO: Joi.string().allow(null).label('CEO'),
    website: Joi.string().allow(null).label('Website'),
}).label('AdditionalInfoEmployer');
exports.userCommonAdditionalInfoSchema = Joi.object()
    .concat(exports.userAdditionalInfoEmployerSchema)
    .concat(exports.userAdditionalInfoWorkerSchema)
    .allow(null).label('CommonAdditionalInfo');
exports.userSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    priority: common_1.prioritySchema,
    workplace: common_1.workPlaceSchema,
    userStatusKyc: exports.userStatusKycSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    costPerHour: exports.workerCostPerHourSchema,
    payPeriod: common_1.payPeriodSchema,
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_1.userRatingStatisticSchema,
    questsStatistic: statistics_1.questsStatisticSchema,
    chatStatistic: statistics_1.userChatsStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
    createdAt: common_1.isoDateSchema,
}).label("User");
exports.userMeSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    priority: common_1.prioritySchema,
    workplace: common_1.workPlaceSchema,
    userStatusKyc: exports.userStatusKycSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    costPerHour: exports.workerCostPerHourSchema,
    payPeriod: common_1.payPeriodSchema,
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    totpIsActive: exports.userTotpIsActiveSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_1.userRatingStatisticSchema,
    employerProfileVisibilitySetting: exports.employerProfileVisibilitySettingsForGetMeSchema,
    workerProfileVisibilitySetting: exports.employerProfileVisibilitySettingsForGetMeSchema,
    questsStatistic: statistics_1.questsStatisticSchema,
    chatStatistic: statistics_1.userChatsStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
    wallet: wallet_1.walletAddressesSchema,
    affiliateUser: Joi.object({
        referralCodeId: common_1.idSchema,
    }).label('AffiliateMe'),
    createdAt: common_1.isoDateSchema,
}).label("UserMe");
exports.userEmployerSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    workplace: null,
    priority: null,
    userStatusKyc: exports.userStatusKycSchema,
    additionalInfo: exports.userAdditionalInfoEmployerSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_1.userRatingStatisticSchema,
    questsStatistic: statistics_1.questsStatisticSchema,
    createdAt: common_1.isoDateSchema,
}).label("UserEmployer");
exports.userWorkerSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    userStatusKyc: exports.userStatusKycSchema,
    additionalInfo: exports.userAdditionalInfoWorkerSchema,
    costPerHour: exports.workerCostPerHourSchema,
    payPeriod: common_1.payPeriodSchema,
    workplace: common_1.workPlaceSchema,
    role: exports.userRoleSchema,
    priority: common_1.prioritySchema,
    location: common_1.locationSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_1.userRatingStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
    questsStatistic: statistics_1.questsStatisticSchema,
    createdAt: common_1.isoDateSchema,
}).label("UserWorker");
exports.userShortSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_1.userRatingStatisticSchema,
}).label('UserShort');
exports.userShortWithAdditionalInfoSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    ratingStatistic: statistics_1.userRatingStatisticSchema,
}).label('UserShort');
exports.userShortWithWalletSchema = Joi.object({
    id: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_1.userRatingStatisticSchema,
    wallet: wallet_1.walletAddressesSchema,
}).label('UserShortWithWallet');
exports.userListSortSchema = Joi.object({
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('UserListSort');
exports.betweenCostPerHourSchema = Joi.object({
    from: exports.workerCostPerHourSchema.required(),
    to: exports.workerCostPerHourSchema.required(),
}).label('BetweenCostPerHour');
exports.employerQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.userListSortSchema,
    ratingStatuses: statistics_1.userRatingStatusesSchema.default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('EmployerQuery');
exports.workerQuerySchema = Joi.object({
    q: common_1.searchSchema,
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
    sort: exports.userListSortSchema,
    priorities: common_1.prioritiesSchema.default(null),
    ratingStatuses: statistics_1.userRatingStatusesSchema.default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    betweenCostPerHour: exports.betweenCostPerHourSchema.default(null),
    payPeriods: common_1.payPeriodsSchema.unique().min(1).max(11).default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('WorkerQuery');
exports.workerQueryForMapPointsSchema = Joi.object({
    q: common_1.searchSchema,
    priorities: common_1.prioritiesSchema.default(null),
    ratingStatuses: statistics_1.userRatingStatusesSchema.default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    betweenCostPerHour: exports.betweenCostPerHourSchema.default(null),
    payPeriods: common_1.payPeriodsSchema.unique().min(1).max(11).default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.required(),
}).label('WorkerQueryForMapPoints');
exports.workerPayloadSchema = Joi.object({
    specializations: specialization_1.specializationsFilerSchema.default(null),
}).label('WorkerPayload');
exports.usersSchema = Joi.array().items(exports.userSchema).label('Users');
exports.userEmployersSchema = Joi.array().items(exports.userEmployerSchema).label('UserEmployers');
exports.userWorkersSchema = Joi.array().items(exports.userWorkerSchema).label('UserWorkers');
exports.usersShortSchema = Joi.array().items(exports.userShortSchema).label('UsersShort');
exports.usersShortWithAdditionalInfoSchema = Joi.array().items(exports.userShortWithAdditionalInfoSchema).label('UsersShortWithAdditionalInfo');
exports.tokensWithStatus = Joi.object({
    userStatus: exports.userStatusSchema,
    access: common_1.jwtTokenAccess,
    refresh: common_1.jwtTokenRefresh,
    address: wallet_1.walletAddressSchema,
}).label("TokensWithStatus");
exports.userSessionSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    place: common_1.sessionPlaceSchema,
    invalidating: Joi.boolean().label('UserSessionInvalidating'),
    ip: Joi.string().label('UserSessionIp'),
    device: Joi.string().label('UserSessionDevice'),
    logoutAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('UserSession');
exports.userSessionsSchema = Joi.array().items(exports.userSessionSchema).label('UserSessions');
exports.userBlackListReasonSchema = Joi.string().example('Reason...').label('UserBlackReason');
exports.userBlackListStatusSchema = Joi.number().valid(...Object.keys(models_1.BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.BlackListStatus.Blocked).label("UserBlackStatus");
exports.userBlackListSchema = Joi.object({
    id: common_1.idSchema,
    blockedByAdminId: common_1.idSchema,
    unblockedByAdminId: common_1.idSchema,
    userId: common_1.idSchema,
    reason: exports.userBlackListReasonSchema,
    userStatusBeforeBlocking: exports.userStatusSchema,
    status: exports.userBlackListStatusSchema,
    user: exports.userSchema,
    blockedByAdmin: admin_1.adminSchema,
    unblockedByAdmin: admin_1.adminSchema,
}).label('UserBlackList');
