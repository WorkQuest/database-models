import * as Joi from "joi";
import {
  QuestPriority,
  AdType,
  QuestStatus,
  QuestsResponseStatus,
  QuestsResponseType,
  QuestWorkPlace,
  QuestEmployment,
} from '../models';
import {
  idSchema,
  isoDateSchema,
  limitSchema,
  locationSchema,
  offsetSchema,
  searchSchema,
  sortDirectionSchema,
  countSchema,
  starSchema,
} from './common';
import {userShortSchema} from "./user";
import {mediasUrlOnlySchema} from "./media";
import {specializationsSchema, specializationsFilerSchema} from "./specialization";

// Quests schemes

export const questCategorySchema = Joi.string().example('Retail').label('QuestCategory');
export const questStatusSchema = Joi.number().valid(...Object.keys(QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestStatus.Created).label('QuestStatus');
export const questPrioritySchema = Joi.number().valid(...Object.keys(QuestPriority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestPriority.AllPriority).label('QuestPriority');
export const questTitleSchema = Joi.string().example('Title...').label('QuestTitle');
export const questDescriptionSchema = Joi.string().example('Description quest...').label('QuestDescription');
export const questPriceSchema = Joi.string().example("500").label('QuestPrice');
export const questAdTypeSchema = Joi.number().valid(...Object.keys(AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(AdType.Free).label('QuestAdType');
export const questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceName');
export const questWorkPlaceSchema = Joi.string().valid(...Object.values(QuestWorkPlace)).example(QuestWorkPlace.Distant).label('QuestWorkPlace');
export const questEmploymentSchema = Joi.string().valid(...Object.values(QuestEmployment)).example(QuestEmployment.FullTime).label('QuestEmployment');

export const questSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  assignedWorkerId: idSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  workplace: questWorkPlaceSchema,
  employment: questEmploymentSchema,
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
  specializations: specializationsSchema,
  createdAt: isoDateSchema,
}).label("Quest");

export const questsSchema = Joi.array().items(questSchema).label('Quests');

export const questsWithCountSchema = Joi.object({
  count: countSchema,
  quests: questsSchema,
}).label("QuestsWithCount");

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
  sort: questsListSortSchema,
  specialization: specializationsFilerSchema.default(null),
  priority: questPrioritySchema.default(null),
  status: questStatusSchema.default(null),
  adType: questAdTypeSchema.default(null),
  workplace: questWorkPlaceSchema.default(null),
  employment: questEmploymentSchema.default(null),
  invited: Joi.boolean().default(false),
  performing: Joi.boolean().default(false),
  starred: Joi.boolean().default(false),
}).label('QuestsQuery');

export const locationForValidateSchema = Joi.object({
  location: locationSchema.required(),
  locationPlaceName: questLocationPlaceNameSchema.required(),
}).unknown(true).label('LocationForValidate');

// QuestsResponse schemes

export const questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('QuestsResponseMessage');
export const questsResponseStatusSchema = Joi.number().example(QuestsResponseStatus.Open).valid(...Object.keys(QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
export const questsResponseTypeSchema = Joi.number().example(QuestsResponseType.Response).valid(...Object.keys(QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');

export const questsResponseSchema = Joi.object({
  id: idSchema,
  workerId: idSchema,
  questId: idSchema,
  status: questsResponseStatusSchema,
  workplace: questWorkPlaceSchema,
  employment: questEmploymentSchema,
  type: questsResponseTypeSchema,
  message: questsResponseMessageSchema,
  worker: userShortSchema,
  // quest: questSchema,
}).label('QuestsResponse');

export const questsResponsesSchema = Joi.array().items(questsResponseSchema).label('QuestsResponses');

export const questsResponsesWithCountSchema = Joi.object({
  count: countSchema,
  responses: questsResponsesSchema,
}).label('QuestsResponsesWithCount');

// Quest on route get quest/quests

export const questForGetSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  assignedWorkerId: idSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  workplace: questWorkPlaceSchema,
  employment: questEmploymentSchema,
  priority: questPrioritySchema,
  locationPlaceName: questLocationPlaceNameSchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  user: userShortSchema,
  assignedWorker: userShortSchema,
  star: starSchema,
  response: questsResponseSchema.allow(null),
  medias: mediasUrlOnlySchema,
  questSpecializations: specializationsSchema,
  createdAt: isoDateSchema,
}).label('QuestForGet');

export const questsForGetSchema = Joi.array().items(questForGetSchema).label('QuestsForGet');

export const questsForGetWithCountSchema = Joi.object({
  count: countSchema,
  responses: questsForGetSchema,
}).label('QuestsForGetWithCount');




