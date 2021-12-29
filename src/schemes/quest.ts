import * as Joi from "joi";
import {userShortSchema, reviewSchema} from "./user";
import {mediasUrlOnlySchema} from "./media";
import {
  specializationsFilerSchema,
  modelSpecializationsSchema,
} from "./specialization";
import {
  AdType,
  QuestStatus,
  QuestEmployment,
  QuestsResponseType,
  QuestsResponseStatus,
  QuestChatStatuses,
} from '../models';
import {
  idSchema,
  starSchema,
  limitSchema,
  countSchema,
  searchSchema,
  offsetSchema,
  isoDateSchema,
  prioritySchema,
  locationSchema,
  workPlaceSchema,
  workPlacesSchema,
  sortDirectionSchema,
} from './common';

/** Quests schemes */

export const questCategorySchema = Joi.string().example('Retail').label('QuestCategory');
export const questStatusSchema = Joi.number().valid(...Object.keys(QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestStatus.Created).label('QuestStatus');
export const questTitleSchema = Joi.string().example('Title...').label('QuestTitle');
export const questDescriptionSchema = Joi.string().example('Description quest...').label('QuestDescription');
export const questPriceSchema = Joi.string().example("500").label('QuestPrice');
export const questAdTypeSchema = Joi.number().valid(...Object.keys(AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(AdType.Free).label('QuestAdType');
export const questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceName');
export const questEmploymentSchema = Joi.string().valid(...Object.values(QuestEmployment)).example(QuestEmployment.FullTime).label('QuestEmployment');

export const questEmploymentsSchema = Joi.array().items(questEmploymentSchema).label('QuestEmployments');
export const questPrioritiesSchema = Joi.array().items(prioritySchema).label('QuestPriorities');
export const questStatusesSchema = Joi.array().items(questStatusSchema).label('QuestStatuses');

export const questSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  assignedWorkerId: idSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  workplace: workPlaceSchema,
  employment: questEmploymentSchema,
  priority: prioritySchema,
  location: locationSchema,
  locationPlaceName: questLocationPlaceNameSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  user: userShortSchema,
  assignedWorker: userShortSchema,
  medias: mediasUrlOnlySchema,
  questSpecializations: modelSpecializationsSchema,
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

export const betweenPriceSchema = Joi.object({
  from: questPriceSchema.required(),
  to: questPriceSchema.required(),
}).label('BetweenPrice');

export const questQuerySchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  north: locationSchema,
  south: locationSchema,
  sort: questsListSortSchema,
  adType: questAdTypeSchema.default(null),
  priceBetween: betweenPriceSchema.default(null),
  statuses: questStatusesSchema.unique().default(null),
  priorities: questPrioritiesSchema.unique().default(null),
  workplaces: workPlacesSchema.unique().default(null),
  employments: questEmploymentsSchema.unique().default(null),
  specializations: specializationsFilerSchema.unique().default(null),
  responded: Joi.boolean().default(false),                                  /** Only quests that worker answered (see QuestResponse and its type)   */
  invited: Joi.boolean().default(false),                                    /** Only quests where worker invited (see QuestResponse and its type)   */
  performing: Joi.boolean().default(false),                                 /** Only quests where worker performs (see Quest.assignedWorkerId)      */
  starred: Joi.boolean().default(false),                                    /** Only quest with star (see StarredQuests)                            */
}).label('QuestsQuery');

// TODO Добавить в общее
export const locationForValidateSchema = Joi.object({
  location: locationSchema.required(),
  locationPlaceName: questLocationPlaceNameSchema.required(),
}).unknown(true).label('LocationForValidate');

/** QuestsResponse schemes */

export const questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('QuestsResponseMessage');
export const questsResponseStatusSchema = Joi.number().example(QuestsResponseStatus.Open).valid(...Object.keys(QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
export const questsResponseTypeSchema = Joi.number().example(QuestsResponseType.Response).valid(...Object.keys(QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');
export const questChatStatusSchema = Joi.string().valid(...Object.values(QuestChatStatuses)).example(QuestChatStatuses.Open).label('QuestChatStatus');

export const questChatSchema = Joi.object({
  id: idSchema,
  employerId: idSchema,
  workerId: idSchema,
  questId: idSchema,
  responseId: idSchema,
  chatId: idSchema,
  status: questChatStatusSchema
}).label('QuestChat');

export const questsResponseSchema = Joi.object({
  id: idSchema,
  workerId: idSchema,
  questId: idSchema,
  status: questsResponseStatusSchema,
  type: questsResponseTypeSchema,
  message: questsResponseMessageSchema,
  worker: userShortSchema,
  questChat: questChatSchema,
  // quest: questSchema,
}).label('QuestsResponse');

export const questsResponsesSchema = Joi.array().items(questsResponseSchema).label('QuestsResponses');

export const questsResponsesWithCountSchema = Joi.object({
  count: countSchema,
  responses: questsResponsesSchema,
}).label('QuestsResponsesWithCount');

/** Quest on route get quest/quests */

export const questForGetSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  assignedWorkerId: idSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  workplace: workPlaceSchema,
  employment: questEmploymentSchema,
  priority: prioritySchema,
  locationPlaceName: questLocationPlaceNameSchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  createdAt: isoDateSchema,
  /**  */
  user: userShortSchema,
  questChat: questChatSchema,
  medias: mediasUrlOnlySchema,
  assignedWorker: userShortSchema,
  questSpecializations: modelSpecializationsSchema,
  yourReview: reviewSchema,                                 /**                                         */
  star: starSchema,                                         /** If this user set star on this quest     */
  invited: questsResponseSchema,                            /** If this user invited on this quest      */
  responded: questsResponseSchema,                          /** If this user responded on this quest    */
  response: questsResponseSchema.allow(null),
}).label('QuestForGet');

export const questsForGetSchema = Joi.array().items(questForGetSchema).label('QuestsForGet');

export const questsForGetWithCountSchema = Joi.object({
  count: countSchema,
  responses: questsForGetSchema,
}).label('QuestsForGetWithCount');




