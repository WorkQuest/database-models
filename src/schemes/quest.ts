import * as Joi from "joi";
import {adminSchema} from "./admin";
import {userShortSchema} from "./user";
import {mediasUrlOnlySchema} from "./media";
import {questRaiseViewSchema} from "./questRaiseView";
import {
  specializationsFilerSchema,
  modelSpecializationsSchema,
} from "./specialization";
import {
  QuestStatus,
  QuestEmployment,
  QuestsResponseType,
  QuestsResponseStatus,
  QuestChatStatus,
  BlackListStatus,
  QuestBlackList,
  DisputeStatus,
  DisputeReason,
  DisputeDecision,
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
  payPeriodSchema,
  payPeriodsSchema,
  workPlacesSchema,
  sortDirectionSchema,
  locationPlaceNameSchema,
  searchByNorthAndSouthCoordinatesSchema,

} from './common';
import {contractAddressSchema} from "./liquidity";

/** Quest chat schemes */

export const questChatStatusSchema = Joi.number().valid(...Object.keys(QuestChatStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestChatStatus.Open).label('QuestChatStatus');

export const questChatSchema = Joi.object({
  id: idSchema,
  employerId: idSchema,
  workerId: idSchema,
  disputeAdminId: idSchema,
  questId: idSchema,
  responseId: idSchema,
  chatId: idSchema,
  status: questChatStatusSchema,
}).label('QuestChat');

export const questChatOnlyIdsSchema = Joi.object({
  employerId: idSchema,
  workerId: idSchema,
  questId: idSchema,
  responseId: idSchema,
  chatId: idSchema
}).label('QuestChatOnlyIds');

/** Quests schemes */

export const questStatusSchema = Joi.number().valid(...Object.keys(QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestStatus.Pending).label('QuestStatus');
export const questTitleSchema = Joi.string().example('Title...').label('QuestTitle');
export const questDescriptionSchema = Joi.string().example('Description quest...').label('QuestDescription');
export const questPriceSchema = Joi.string().example("500").label('QuestPrice');
export const questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceName');
export const questEmploymentSchema = Joi.string().valid(...Object.values(QuestEmployment)).example(QuestEmployment.FullTime).label('QuestEmployment');

export const questEmploymentsSchema = Joi.array().items(questEmploymentSchema).label('QuestEmployments');
export const questPrioritiesSchema = Joi.array().items(prioritySchema).label('QuestPriorities');
export const questStatusesSchema = Joi.array().items(questStatusSchema).label('QuestStatuses');

export const questNonceSchema = Joi.string().default(idSchema).example('fa0e2e4e-c53f-4af7-8906-1649daa0cce3').label('QuestNonce');

export const questSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  avatarId: idSchema,
  assignedWorkerId: idSchema,
  contractAddress: contractAddressSchema,
  nonce: questNonceSchema,
  status: questStatusSchema,
  workplace: workPlaceSchema,
  payPeriod: payPeriodSchema,
  typeOfEmployment: questEmploymentSchema,
  priority: prioritySchema,
  location: locationSchema,
  locationPlaceName: locationPlaceNameSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  user: userShortSchema,
  assignedWorker: userShortSchema,
  medias: mediasUrlOnlySchema,
  questChat: questChatSchema,
  questSpecializations: modelSpecializationsSchema,
  raiseView: questRaiseViewSchema,
  startedAt: isoDateSchema,
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
}).default({createdAt: 'asc'}).label('QuestsListSort');

export const betweenPriceSchema = Joi.object({
  from: questPriceSchema.required(),
  to: questPriceSchema.required(),
}).label('BetweenPrice');

export const createdBetweenSchema = Joi.object({
  from: isoDateSchema.required(),
  to: isoDateSchema.required(),
}).label('CreatedBetween');

export const questsPayloadSchema = Joi.object({
  specializations: specializationsFilerSchema.unique().default(null),
}).label('QuestsPayload');

// TODO общие фильтры questQuerySchema и questQueryForMapPointsSchema
export const questQuerySchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  sort: questsListSortSchema,
  priceBetween: betweenPriceSchema.default(null),
  statuses: questStatusesSchema.unique().default(null),
  priorities: questPrioritiesSchema.unique().default(null),
  workplaces: workPlacesSchema.unique().default(null),
  payPeriods: payPeriodsSchema.unique().min(1).max(11).default(null),          /** 11 is length of PayPeriod enum */
  typeOfEmployments: questEmploymentsSchema.unique().default(null),
  northAndSouthCoordinates: searchByNorthAndSouthCoordinatesSchema.default(null),       /**                                                                     */
  responded: Joi.boolean().default(false),                                              /** Only quests that worker answered (see QuestResponse and its type)   */
  invited: Joi.boolean().default(false),                                                /** Only quests where worker invited (see QuestResponse and its type)   */
  starred: Joi.boolean().default(false),                                                /** Only quest with star (see StarredQuests)                            */
}).label('QuestsQuery');

export const questQueryForGetWorkersSchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  sort: questsListSortSchema,
  priceBetween: betweenPriceSchema.default(null),
  statuses: questStatusesSchema.unique().default(null),
  priorities: questPrioritiesSchema.unique().default(null),
  workplaces: workPlacesSchema.unique().default(null),
  payPeriods: payPeriodsSchema.unique().min(1).max(11).default(null),          /** 11 is length of PayPeriod enum */
  typeOfEmployments: questEmploymentsSchema.unique().default(null),
  northAndSouthCoordinates: searchByNorthAndSouthCoordinatesSchema.default(null),       /**                                                                     */
}).label('QuestQueryForGetWorkers');

export const questQueryForMapPointsSchema = Joi.object({
  q: searchSchema,
  priceBetween: betweenPriceSchema.default(null),
  statuses: questStatusesSchema.unique().default(null),
  priorities: questPrioritiesSchema.unique().default(null),
  workplaces: workPlacesSchema.unique().default(null),
  payPeriods: payPeriodsSchema.unique().min(1).max(11).default(null),          /** 11 is length of PayPeriod enum */
  typeOfEmployments: questEmploymentsSchema.unique().default(null),
  northAndSouthCoordinates: searchByNorthAndSouthCoordinatesSchema.required(),                /**                                                                     */
  responded: Joi.boolean().default(false),                                              /** Only quests that worker answered (see QuestResponse and its type)   */
  invited: Joi.boolean().default(false),                                                /** Only quests where worker invited (see QuestResponse and its type)   */
  starred: Joi.boolean().default(false),                                                /** Only quest with star (see StarredQuests)                            */
}).label('QuestQueryForMapPoints');

/** QuestsResponse schemes */

export const questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('QuestsResponseMessage');
export const questsResponseStatusSchema = Joi.number().example(QuestsResponseStatus.Open).valid(...Object.keys(QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
export const questsResponseTypeSchema = Joi.number().example(QuestsResponseType.Response).valid(...Object.keys(QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');

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

/** Quest Review */

export const questReviewMessageSchema = Joi.string().example('Hello, I need this job').label('Message');
export const questReviewMarkSchema = Joi.number().min(1).max(5).label('Mark');

export const questReviewSchema = Joi.object({
  reviewId: idSchema,
  questId: idSchema,
  fromUserId: idSchema,
  toUserId: idSchema,
  message: questReviewMessageSchema,
  mark: questReviewMarkSchema,
  fromUser: userShortSchema,
  toUser: userShortSchema,
  quest: questSchema,
  createdAt: isoDateSchema,
}).label('Review');

export const reviewsSchema = Joi.array().items(questReviewSchema).label('Reviews');

/** Quest on route get quest/quests */

export const questForGetSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  avatarId: idSchema,
  assignedWorkerId: idSchema,
  contractAddress: contractAddressSchema,
  nonce: questNonceSchema,
  status: questStatusSchema,
  workplace: workPlaceSchema,
  payPeriod: payPeriodSchema,
  typeOfEmployment: questEmploymentSchema,
  priority: prioritySchema,
  locationPlaceName: locationPlaceNameSchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  startedAt: isoDateSchema,
  createdAt: isoDateSchema,
  /** Aliases for include */
  user: userShortSchema,
  questChat: questChatSchema,
  medias: mediasUrlOnlySchema,
  assignedWorker: userShortSchema,
  questSpecializations: modelSpecializationsSchema,
  raiseView: questRaiseViewSchema,
  openDispute: Joi.object().label('OpenDispute'),     /**                                         */
  yourReview: questReviewSchema,                            /**                                         */
  star: starSchema,                                         /** If this user set star on this quest     */
  invited: questsResponseSchema,                            /** If this user invited on this quest      */
  responded: questsResponseSchema,                          /** If this user responded on this quest    */
  response: questsResponseSchema.allow(null),
}).label('QuestForGet');

export const questsForGetSchema = Joi.array().items(questForGetSchema).label('QuestsForGet');

export const questsForGetWithCountSchema = Joi.object({
  count: countSchema,
  quests: questsForGetSchema,
}).label('QuestsForGetWithCount');

/** Quest for admins panel */

export const questForAdminsGetSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  avatarId: idSchema,
  assignedWorkerId: idSchema,
  contractAddress: contractAddressSchema,
  nonce: questNonceSchema,
  status: questStatusSchema,
  workplace: workPlaceSchema,
  payPeriod: payPeriodSchema,
  typeOfEmployment: questEmploymentSchema,
  priority: prioritySchema,
  locationPlaceName: locationPlaceNameSchema,
  location: locationSchema,
  title: questTitleSchema,
  description: questDescriptionSchema,
  price: questPriceSchema,
  startedAt: isoDateSchema,
  createdAt: isoDateSchema,
  /** Aliases for include */
  user: userShortSchema,
  questChat: questChatSchema,
  medias: mediasUrlOnlySchema,
  assignedWorker: userShortSchema,
  openDispute: Joi.object().label('OpenDispute'),
  questSpecializations: modelSpecializationsSchema,
}).label('QuestForAdminsGet');

/** Black list */

export const questBlackListReasonSchema = Joi.string().example('Quest was blocked').label('QuestBlackListReason');
export const questBlackListStatusSchema = Joi.number().valid(...Object.keys(BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(BlackListStatus.Blocked).label('QuestBlackListStatus');

export const questBlackListSchema = Joi.object({
  id: idSchema,
  blockedByAdminId: idSchema,
  unblockedByAdminId: idSchema,
  questId: idSchema,
  reason: questBlackListReasonSchema,
  questStatusBeforeBlocking: questStatusesSchema,
  status: questBlackListStatusSchema,
  unblockedAt: isoDateSchema,
}).label('QuestBlackList');

/** Quest Dispute */

export const questDisputeNumberSchema = Joi.number().example('123').label('DisputeNumber');
export const questDisputeStatusSchema = Joi.number().valid(...Object.keys(DisputeStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).default(DisputeStatus.Pending).example(DisputeStatus.Pending).label('DisputeStatus');
export const questDisputeReasonSchema = Joi.string().max(255).valid(...Object.values(DisputeReason)).default(DisputeReason.AnotherReason).example(DisputeReason.AnotherReason).label('DisputeReason');
export const questDisputeProblemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescription');
export const questDisputeDecisionDescriptionSchema = Joi.string().example('Decision is...').label('DecisionDescription');
export const questDisputeDecisionSchema = Joi.string().valid(...Object.values(DisputeDecision)).example(DisputeDecision.AcceptWork).label("DisputeDecision");
export const questDisputeReviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
export const questDisputeReviewMessageTextSchema = Joi.string().example("Hello world!").label('QuestDisputeMessageText');

export const questDisputeStatusesSchema = Joi.array().items(questDisputeStatusSchema).label('QuestDisputeStatuses');

export const questDisputeSchema = Joi.object({
  id: idSchema,
  questId: idSchema,
  openDisputeUserId: idSchema,
  opponentUserId: idSchema,
  assignedAdminId: idSchema,
  disputeNumber: questDisputeNumberSchema,
  openOnQuestStatus: questStatusSchema,
  status: questDisputeStatusSchema,
  reason: questDisputeReasonSchema,
  problemDescription: questDisputeProblemDescriptionSchema,
  decisionDescription: questDisputeDecisionDescriptionSchema,
  decision: questDisputeDecisionSchema,
  acceptedAt: isoDateSchema,
  resolvedAt: isoDateSchema,
  createdAt: isoDateSchema,
  /** Include */
  openDisputeUser: userShortSchema,
  opponentUser: userShortSchema,
  quest: questSchema
}).label("QuestDispute");

export const questDisputeWIthChatSchema = questDisputeSchema.keys({
  quest: questSchema.keys({
    questChat: questChatOnlyIdsSchema
  }),
}).label('QuestDisputeWithChat');

export const questDisputeQuerySchema = Joi.object({
  limit: limitSchema,
  offset: offsetSchema,
  statuses: questDisputeStatusesSchema.unique().default(null),
}).label('disputeQuery')

export const questDisputesSchema = Joi.array().items(questDisputeSchema).label('QuestDisputes');

export const questDisputesWithCountSchema = Joi.object({
  count: countSchema,
  disputes: questDisputeSchema,
}).label('QuestDisputesWithCount');

export const questDisputeReviewSchema = Joi.object({
  id: idSchema,
  disputeId: idSchema,
  fromUserId: idSchema,
  toAdminId: idSchema,
  message: questDisputeReviewMessageTextSchema,
  mark: questDisputeReviewMarkSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
  /** Includes */
  fromUser: userShortSchema,
  toAdmin: adminSchema,
  dispute: questDisputeSchema,
}).label("QuestDisputeReview");


