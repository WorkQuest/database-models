"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const user_1 = require("./user");
const media_1 = require("./media");
const specialization_1 = require("./specialization");
const models_1 = require("../models");
const common_1 = require("./common");
exports.questChatStatusSchema = Joi.string().valid(...Object.values(models_1.QuestChatStatuses)).example(models_1.QuestChatStatuses.Open).label('QuestChatStatus');
exports.questChatSchema = Joi.object({
    id: common_1.idSchema,
    employerId: common_1.idSchema,
    workerId: common_1.idSchema,
    questId: common_1.idSchema,
    responseId: common_1.idSchema,
    chatId: common_1.idSchema,
    status: exports.questChatStatusSchema,
}).label('QuestChat');
exports.questCategorySchema = Joi.string().example('Retail').label('QuestCategory');
exports.questStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestStatus.Created).label('QuestStatus');
exports.questTitleSchema = Joi.string().example('Title...').label('QuestTitle');
exports.questDescriptionSchema = Joi.string().example('Description quest...').label('QuestDescription');
exports.questPriceSchema = Joi.string().example("500").label('QuestPrice');
exports.questAdTypeSchema = Joi.number().valid(...Object.keys(models_1.AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.AdType.Free).label('QuestAdType');
exports.questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceName');
exports.questEmploymentSchema = Joi.string().valid(...Object.values(models_1.QuestEmployment)).example(models_1.QuestEmployment.FullTime).label('QuestEmployment');
exports.questEmploymentsSchema = Joi.array().items(exports.questEmploymentSchema).label('QuestEmployments');
exports.questPrioritiesSchema = Joi.array().items(common_1.prioritySchema).label('QuestPriorities');
exports.questStatusesSchema = Joi.array().items(exports.questStatusSchema).label('QuestStatuses');
exports.questSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    assignedWorkerId: common_1.idSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    workplace: common_1.workPlaceSchema,
    employment: exports.questEmploymentSchema,
    priority: common_1.prioritySchema,
    location: common_1.locationSchema,
    locationPlaceName: exports.questLocationPlaceNameSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    user: user_1.userShortSchema,
    assignedWorker: user_1.userShortSchema,
    medias: media_1.mediasUrlOnlySchema,
    questChat: exports.questChatSchema,
    questSpecializations: specialization_1.modelSpecializationsSchema,
    createdAt: common_1.isoDateSchema,
}).label("Quest");
exports.questsSchema = Joi.array().items(exports.questSchema).label('Quests');
exports.questsWithCountSchema = Joi.object({
    count: common_1.countSchema,
    quests: exports.questsSchema,
}).label("QuestsWithCount");
exports.questsListSortSchema = Joi.object({
    price: common_1.sortDirectionSchema,
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('QuestsListSort');
exports.betweenPriceSchema = Joi.object({
    from: exports.questPriceSchema.required(),
    to: exports.questPriceSchema.required(),
}).label('BetweenPrice');
exports.questQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    north: common_1.locationSchema,
    south: common_1.locationSchema,
    sort: exports.questsListSortSchema,
    adType: exports.questAdTypeSchema.default(null),
    priceBetween: exports.betweenPriceSchema.default(null),
    statuses: exports.questStatusesSchema.unique().default(null),
    priorities: exports.questPrioritiesSchema.unique().default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    employments: exports.questEmploymentsSchema.unique().default(null),
    specializations: specialization_1.specializationsFilerSchema.unique().default(null),
    responded: Joi.boolean().default(false),
    invited: Joi.boolean().default(false),
    performing: Joi.boolean().default(false),
    starred: Joi.boolean().default(false),
}).label('QuestsQuery');
exports.locationForValidateSchema = Joi.object({
    location: common_1.locationSchema.required(),
    locationPlaceName: exports.questLocationPlaceNameSchema.required(),
}).unknown(true).label('LocationForValidate');
exports.questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('QuestsResponseMessage');
exports.questsResponseStatusSchema = Joi.number().example(models_1.QuestsResponseStatus.Open).valid(...Object.keys(models_1.QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
exports.questsResponseTypeSchema = Joi.number().example(models_1.QuestsResponseType.Response).valid(...Object.keys(models_1.QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');
exports.questsResponseSchema = Joi.object({
    id: common_1.idSchema,
    workerId: common_1.idSchema,
    questId: common_1.idSchema,
    status: exports.questsResponseStatusSchema,
    type: exports.questsResponseTypeSchema,
    message: exports.questsResponseMessageSchema,
    worker: user_1.userShortSchema,
    questChat: exports.questChatSchema,
}).label('QuestsResponse');
exports.questsResponsesSchema = Joi.array().items(exports.questsResponseSchema).label('QuestsResponses');
exports.questsResponsesWithCountSchema = Joi.object({
    count: common_1.countSchema,
    responses: exports.questsResponsesSchema,
}).label('QuestsResponsesWithCount');
exports.questForGetSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    assignedWorkerId: common_1.idSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    workplace: common_1.workPlaceSchema,
    employment: exports.questEmploymentSchema,
    priority: common_1.prioritySchema,
    locationPlaceName: exports.questLocationPlaceNameSchema,
    location: common_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    createdAt: common_1.isoDateSchema,
    user: user_1.userShortSchema,
    questChat: exports.questChatSchema,
    medias: media_1.mediasUrlOnlySchema,
    assignedWorker: user_1.userShortSchema,
    questSpecializations: specialization_1.modelSpecializationsSchema,
    yourReview: user_1.reviewSchema,
    star: common_1.starSchema,
    invited: exports.questsResponseSchema,
    responded: exports.questsResponseSchema,
    response: exports.questsResponseSchema.allow(null),
}).label('QuestForGet');
exports.questsForGetSchema = Joi.array().items(exports.questForGetSchema).label('QuestsForGet');
exports.questsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    responses: exports.questsForGetSchema,
}).label('QuestsForGetWithCount');
