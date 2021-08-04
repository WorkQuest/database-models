import * as Joi from "joi";
import { QuestPriority, AdType, QuestStatus } from '../models';
import {
  idSchema,
  isoDateSchema,
  limitSchema,
  locationSchema,
  offsetSchema,
  searchSchema,
  sortDirectionSchema,
  userSchema,
  reviewsSchema,
  questsResponsesSchema,
  mediasUrlOnlySchema, countSchema,
} from './index';

const userIdSchema = idSchema.label('UserId');
const questIdSchema = idSchema.label('QuestId');
export const questCategorySchema = Joi.string().example('Retail').label('Category');
export const questStatusSchema = Joi.number().valid(...Object.keys(QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestStatus.Created).label('Status');
export const questPrioritySchema = Joi.number().valid(...Object.keys(QuestPriority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestPriority.AllPriority).label('Priority');
export const questTitleSchema = Joi.string().example('Title...').label('Title');
export const questDescriptionSchema = Joi.string().example('Description quest...').label('Description');
export const questPriceSchema = Joi.string().example("500").label('Price');
export const questAdTypeSchema = Joi.number().valid(...Object.keys(AdType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(AdType.Free).label('AdType');

export const questSchema = Joi.object({
  id: questIdSchema,
  userId: userIdSchema,
  assignedWorkerId: userIdSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  priority: questPrioritySchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  medias: mediasUrlOnlySchema,
  reviews: reviewsSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label("QuestSchema");

export const questFullSchema = Joi.object({
  id: questIdSchema,
  userId: userIdSchema,
  assignedWorkerId: userIdSchema,
  category: questCategorySchema,
  status: questStatusSchema,
  priority: questPrioritySchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  adType: questAdTypeSchema,
  user: userSchema,
  medias: mediasUrlOnlySchema,
  reviews: reviewsSchema,
  responses: questsResponsesSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label("QuestFull");

export const questsSchema = Joi.array().items(questSchema).label('Quests');

export const questsFullSchema = Joi.array().items(questFullSchema).label('QuestsFull');

const questsWithCountSchema = Joi.object({
  count: countSchema,
  quests: questsSchema,
}).label("QuestsOutput");

export const questsListSortSchema = Joi.object({
  price: sortDirectionSchema,
  createdAt: sortDirectionSchema,
}).default({}).label('QuestsListSort');

export const questsQuerySchema = Joi.object({
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

