"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questsForGetWithCountSchema = exports.questsForGetSchema = exports.questForGetSchema = exports.questsResponsesWithCountSchema = exports.questsResponsesSchema = exports.questsResponseSchema = exports.questsResponseTypeSchema = exports.questsResponseStatusSchema = exports.questsResponseMessageSchema = exports.locationForValidateSchema = exports.questsQuerySchema = exports.questsListSortSchema = exports.questsWithCountSchema = exports.questsSchema = exports.questSchema = exports.questLocationPlaceNameSchema = exports.questAdTypeSchema = exports.questPriceSchema = exports.questDescriptionSchema = exports.questTitleSchema = exports.questPrioritySchema = exports.questStatusSchema = exports.questCategorySchema = void 0;
const Joi = require("joi");
const models_1 = require("../models");
const common_1 = require("./common");
const user_1 = require("./user");
const media_1 = require("./media");
const filter_1 = require("./filter");
exports.questCategorySchema = Joi.string().example('Retail').label('QuestCategory');
exports.questStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestStatus.Created).label('QuestStatus');
exports.questPrioritySchema = Joi.number().valid(...Object.keys(models_1.QuestPriority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestPriority.AllPriority).label('QuestPriority');
exports.questTitleSchema = Joi.string().example('Title...').label('QuestTitle');
exports.questDescriptionSchema = Joi.string().example('Description quest...').label('QuestDescription');
exports.questPriceSchema = Joi.string().example("500").label('QuestPrice');
exports.questAdTypeSchema = Joi.number().valid(...Object.keys(models_1.AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.AdType.Free).label('QuestAdType');
exports.questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceName');
exports.questSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    assignedWorkerId: common_1.idSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    priority: exports.questPrioritySchema,
    location: common_1.locationSchema,
    locationPlaceName: exports.questLocationPlaceNameSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    user: user_1.userShortSchema,
    assignedWorker: user_1.userShortSchema,
    medias: media_1.mediasUrlOnlySchema,
    skillFilters: filter_1.skillFiltersSchema,
    createdAt: common_1.isoDateSchema,
}).label("Quest");
exports.questsSchema = Joi.array().items(exports.questSchema).label('Quests');
exports.questsWithCountSchema = Joi.object({
    count: common_1.countSchema,
    quests: exports.questsSchema,
}).label("QuestsOutput");
exports.questsListSortSchema = Joi.object({
    price: common_1.sortDirectionSchema,
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('QuestsListSort');
exports.questsQuerySchema = Joi.object({
    north: common_1.locationSchema,
    south: common_1.locationSchema,
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
    q: common_1.searchSchema,
    priority: exports.questPrioritySchema.default(null),
    status: exports.questStatusSchema.default(null),
    adType: exports.questAdTypeSchema.default(null),
    sort: exports.questsListSortSchema,
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
    priority: exports.questPrioritySchema,
    locationPlaceName: exports.questLocationPlaceNameSchema,
    location: common_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    user: user_1.userShortSchema,
    assignedWorker: user_1.userShortSchema,
    star: Joi.object().allow(null).label('Star'),
    response: exports.questsResponseSchema.allow(null),
    medias: media_1.mediasUrlOnlySchema,
    skillFilters: filter_1.skillFiltersSchema,
    createdAt: common_1.isoDateSchema,
}).label('QuestForGet');
exports.questsForGetSchema = Joi.array().items(exports.questForGetSchema).label('QuestsForGet');
exports.questsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    responses: exports.questsForGetSchema,
}).label('QuestsResponsesWithCount');
