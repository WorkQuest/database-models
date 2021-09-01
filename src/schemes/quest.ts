import * as Joi from "joi";
import {QuestPriority, AdType, QuestStatus, QuestsResponseStatus, QuestsResponseType} from '../models';
import {
  idSchema,
  isoDateSchema,
  limitSchema,
  locationSchema,
  offsetSchema,
  searchSchema,
  sortDirectionSchema,
  countSchema,
} from './common';
import {userShortSchema} from "./user";
import {mediasUrlOnlySchema} from "./media";

// Quests schemes

const userIdSchema = idSchema.label('UserId');
const questIdSchema = idSchema.label('QuestId');
export const questCategorySchema = Joi.string().example('Retail').label('Category');
export const questStatusSchema = Joi.number().valid(...Object.keys(QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestStatus.Created).label('Status');
export const questPrioritySchema = Joi.number().valid(...Object.keys(QuestPriority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestPriority.AllPriority).label('Priority');
export const questTitleSchema = Joi.string().example('Title...').label('Title');
export const questDescriptionSchema = Joi.string().example('Description quest...').label('Description');
export const questPriceSchema = Joi.string().example("500").label('Price');
export const questAdTypeSchema = Joi.number().valid(...Object.keys(AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(AdType.Free).label('AdType');
export const questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceNameSchema');

export const questSchema = Joi.object({
  id: questIdSchema,
  userId: userIdSchema,
  assignedWorkerId: userIdSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  priority: questPrioritySchema,
  location: locationSchema,
  locationPlaceName: questLocationPlaceNameSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  user: userShortSchema,
  assignedWorker: userShortSchema,
  medias: mediasUrlOnlySchema,
  createdAt: isoDateSchema,
}).label("QuestSchema");

export const questsSchema = Joi.array().items(questSchema).label('Quests');

export const questsWithCountSchema = Joi.object({
  count: countSchema,
  quests: questsSchema,
}).label("QuestsOutput");

export const questsListSortSchema = Joi.object({
  price: sortDirectionSchema,
  createdAt: sortDirectionSchema,
}).default({}).label('QuestsListSort');

export const questsQuerySchema = Joi.object({
  north: locationSchema,
  south: locationSchema,
  offset: offsetSchema,
  limit: limitSchema,
  q: searchSchema,
  priority: questPrioritySchema.default(null),
  status: questStatusSchema.default(null),
  adType: questAdTypeSchema.default(null),
  sort: questsListSortSchema,
  invited: Joi.boolean().default(false),
  performing: Joi.boolean().default(false),
  starred: Joi.boolean().default(false),
}).label('QuestsQuery');

export const locationForValidateSchema = Joi.object({
  location: locationSchema.required(),
  locationPlaceName: questLocationPlaceNameSchema.required(),
}).unknown(true).label('LocationForValidate');

// QuestsResponse schemes

export const questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
export const questsResponseStatusSchema = Joi.number().example(QuestsResponseStatus.Open).valid(...Object.keys(QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
export const questsResponseTypeSchema = Joi.number().example(QuestsResponseType.Response).valid(...Object.keys(QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');

export const questsResponseSchema = Joi.object({
  id: idSchema.label('QuestsResponseId'),
  workerId: idSchema.label('WorkerId'),
  questId: idSchema.label('QuestId'),
  status: questsResponseStatusSchema,
  type: questsResponseTypeSchema,
  message: questsResponseMessageSchema,
  worker: userShortSchema,
  // quest: questSchema,
}).label('QuestsResponseSchema');

export const questsResponsesSchema = Joi.array().items(questsResponseSchema).label('QuestsResponses');

export const questsResponsesWithCountSchema = Joi.object({
  count: countSchema,
  responses: questsResponsesSchema,
}).label('QuestsResponsesWithCount');

// Quest on route get quest/quests

export const questForGetSchema = Joi.object({
  id: questIdSchema,
  userId: userIdSchema,
  assignedWorkerId: userIdSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  priority: questPrioritySchema,
  locationPlaceName: questLocationPlaceNameSchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  user: userShortSchema,
  assignedWorker: userShortSchema,
  star: Joi.object().allow(null).label('Star'),
  response: questsResponseSchema.allow(null),
  medias: mediasUrlOnlySchema,
  createdAt: isoDateSchema,
}).label('QuestForGet');

export const questsForGetSchema = Joi.array().items(questForGetSchema).label('QuestsForGet');

export const questsForGetWithCountSchema = Joi.object({
  count: countSchema,
  responses: questsForGetSchema,
}).label('QuestsResponsesWithCount');




