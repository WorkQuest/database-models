"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const models_1 = require("../models");
const index_1 = require("./index");
const userIdSchema = index_1.idSchema.label('UserId');
const questIdSchema = index_1.idSchema.label('QuestId');
exports.questCategorySchema = Joi.string().example('Retail').label('Category');
exports.questStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestStatus.Created).label('Status');
exports.questPrioritySchema = Joi.number().valid(...Object.keys(models_1.QuestPriority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestPriority.AllPriority).label('Priority');
exports.questTitleSchema = Joi.string().example('Title...').label('Title');
exports.questDescriptionSchema = Joi.string().example('Description quest...').label('Description');
exports.questPriceSchema = Joi.string().example("500").label('Price');
exports.questAdTypeSchema = Joi.number().valid(...Object.keys(models_1.AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.AdType.Free).label('AdType');
exports.questSchema = Joi.object({
    id: questIdSchema,
    userId: userIdSchema,
    assignedWorkerId: userIdSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    priority: exports.questPrioritySchema,
    location: index_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    medias: index_1.mediasUrlOnlySchema,
    reviews: index_1.reviewsSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema,
}).label("QuestSchema");
exports.questFullSchema = Joi.object({
    id: questIdSchema,
    userId: userIdSchema,
    assignedWorkerId: userIdSchema,
    category: exports.questCategorySchema,
    status: exports.questStatusSchema,
    priority: exports.questPrioritySchema,
    location: index_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    adType: exports.questAdTypeSchema,
    user: index_1.userSchema,
    medias: index_1.mediasUrlOnlySchema,
    reviews: index_1.reviewsSchema,
    responses: index_1.questsResponsesSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema,
}).label("QuestFull");
exports.questsSchema = Joi.array().items(exports.questSchema).label('Quests');
exports.questsFullSchema = Joi.array().items(exports.questFullSchema).label('QuestsFull');
const questsWithCountSchema = Joi.object({
    count: index_1.countSchema,
    quests: exports.questsSchema,
}).label("QuestsOutput");
exports.questsListSortSchema = Joi.object({
    price: index_1.sortDirectionSchema,
    createdAt: index_1.sortDirectionSchema,
}).default({}).label('QuestsListSort');
exports.questsQuerySchema = Joi.object({
    offset: index_1.offsetSchema,
    limit: index_1.limitSchema,
    q: index_1.searchSchema,
    priority: exports.questPrioritySchema.default(null),
    status: exports.questStatusSchema.default(null),
    adType: exports.questAdTypeSchema.default(null),
    sort: exports.questsListSortSchema,
    invited: Joi.boolean().default(false),
    performing: Joi.boolean().default(false),
    starred: Joi.boolean().default(false),
}).label('QuestsQuery');
