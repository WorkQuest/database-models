"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questsForGetWithCountSchema = exports.questsForGetSchema = exports.questForGetSchema = exports.questsResponsesWithCountSchema = exports.questsResponsesSchema = exports.questsResponseSchema = exports.questsResponseTypeSchema = exports.questsResponseStatusSchema = exports.questsResponseMessageSchema = exports.questsQuerySchema = exports.questsListSortSchema = exports.questsWithCountSchema = exports.questsSchema = exports.questSchema = exports.questAdTypeSchema = exports.questPriceSchema = exports.questDescriptionSchema = exports.questTitleSchema = exports.questPrioritySchema = exports.questStatusSchema = exports.questCategorySchema = void 0;
const Joi = require("joi");
const models_1 = require("../models");
const common_1 = require("./common");
const user_1 = require("./user");
const media_1 = require("./media");
const userIdSchema = common_1.idSchema.label('UserId');
const questIdSchema = common_1.idSchema.label('QuestId');
exports.questCategorySchema = Joi.string().example('Retail').label('Category');
exports.questStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestStatus.Created).label('Status');
exports.questPrioritySchema = Joi.number().valid(...Object.keys(models_1.QuestPriority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestPriority.AllPriority).label('Priority');
exports.questTitleSchema = Joi.string().example('Title...').label('Title');
exports.questDescriptionSchema = Joi.string().example('Description quest...').label('Description');
exports.questPriceSchema = Joi.string().example("500").label('Price');
exports.questAdTypeSchema = Joi.number().valid(...Object.keys(models_1.AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.AdType.Free).label('AdType');
exports.locationNameSchema = Joi.string().max(255).example('Tomsk').label('LocationNameSchema');
exports.questSchema = Joi.object({
    id: questIdSchema,
    userId: userIdSchema,
    assignedWorkerId: userIdSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    priority: exports.questPrioritySchema,
    locationName: exports.locationNameSchema,
    location: common_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    user: user_1.userShortSchema,
    assignedWorker: user_1.userShortSchema,
    medias: media_1.mediasUrlOnlySchema,
    createdAt: common_1.isoDateSchema,
}).label("QuestSchema");
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
    north: common_1.locationSchema.label('NorthLocation'),
    south: common_1.locationSchema.label('SouthLocation'),
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
exports.questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
exports.questsResponseStatusSchema = Joi.number().example(models_1.QuestsResponseStatus.Open).valid(...Object.keys(models_1.QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
exports.questsResponseTypeSchema = Joi.number().example(models_1.QuestsResponseType.Response).valid(...Object.keys(models_1.QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');
exports.questsResponseSchema = Joi.object({
    id: common_1.idSchema.label('QuestsResponseId'),
    workerId: common_1.idSchema.label('WorkerId'),
    questId: common_1.idSchema.label('QuestId'),
    status: exports.questsResponseStatusSchema,
    type: exports.questsResponseTypeSchema,
    message: exports.questsResponseMessageSchema,
    worker: user_1.userShortSchema,
}).label('QuestsResponseSchema');
exports.questsResponsesSchema = Joi.array().items(exports.questsResponseSchema).label('QuestsResponses');
exports.questsResponsesWithCountSchema = Joi.object({
    count: common_1.countSchema,
    responses: exports.questsResponsesSchema,
}).label('QuestsResponsesWithCount');
exports.questForGetSchema = Joi.object({
    id: questIdSchema,
    userId: userIdSchema,
    assignedWorkerId: userIdSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    priority: exports.questPrioritySchema,
    locationName: exports.locationNameSchema,
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
    createdAt: common_1.isoDateSchema,
}).label('QuestForGet');
exports.questsForGetSchema = Joi.array().items(exports.questForGetSchema).label('QuestsForGet');
exports.questsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    responses: exports.questsForGetSchema,
}).label('QuestsResponsesWithCount');
