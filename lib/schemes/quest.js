"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questDisputesWithCountSchema = exports.questDisputesSchema = exports.questDisputeQuerySchema = exports.questDisputeSchema = exports.questDisputeStatusesSchema = exports.questDisputeReviewMessageTextSchema = exports.questDisputeReviewMarkSchema = exports.questDisputeDecisionDescriptionSchema = exports.questDisputeProblemDescriptionSchema = exports.questDisputeReasonSchema = exports.questDisputeStatusSchema = exports.questDisputeNumberSchema = exports.questBlackListSchema = exports.questBlackListStatusSchema = exports.questBlackListReasonSchema = exports.questForAdminsGetSchema = exports.questsForGetWithCountSchema = exports.questsForGetSchema = exports.questForGetSchema = exports.reviewsSchema = exports.questReviewSchema = exports.questReviewMarkSchema = exports.questReviewMessageSchema = exports.questsResponsesWithCountSchema = exports.questsResponsesSchema = exports.questsResponseSchema = exports.questsResponseTypeSchema = exports.questsResponseStatusSchema = exports.questsResponseMessageSchema = exports.questQueryForMapPointsSchema = exports.questQueryForGetWorkersSchema = exports.questQuerySchema = exports.questsPayloadSchema = exports.betweenPriceSchema = exports.questsListSortSchema = exports.questsWithCountSchema = exports.questsSchema = exports.questSchema = exports.questNonceSchema = exports.questStatusesSchema = exports.questPrioritiesSchema = exports.questEmploymentsSchema = exports.questEmploymentSchema = exports.questLocationPlaceNameSchema = exports.questPriceSchema = exports.questDescriptionSchema = exports.questTitleSchema = exports.questStatusSchema = exports.questChatSchema = exports.questChatStatusSchema = void 0;
exports.questDisputeReviewSchema = void 0;
const Joi = __importStar(require("joi"));
const admin_1 = require("./admin");
const user_1 = require("./user");
const media_1 = require("./media");
const questRaiseView_1 = require("./questRaiseView");
const specialization_1 = require("./specialization");
const models_1 = require("../models");
const common_1 = require("./common");
const liquidity_1 = require("./liquidity");
exports.questChatStatusSchema = Joi.string().valid(...Object.values(models_1.QuestChatStatus)).example(models_1.QuestChatStatus.Open).label('QuestChatStatus');
exports.questChatSchema = Joi.object({
    id: common_1.idSchema,
    employerId: common_1.idSchema,
    workerId: common_1.idSchema,
    disputeAdminId: common_1.idSchema,
    questId: common_1.idSchema,
    responseId: common_1.idSchema,
    chatId: common_1.idSchema,
    status: exports.questChatStatusSchema,
}).label('QuestChat');
exports.questStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestStatus.Pending).label('QuestStatus');
exports.questTitleSchema = Joi.string().example('Title...').label('QuestTitle');
exports.questDescriptionSchema = Joi.string().example('Description quest...').label('QuestDescription');
exports.questPriceSchema = Joi.string().example("500").label('QuestPrice');
exports.questLocationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('QuestLocationPlaceName');
exports.questEmploymentSchema = Joi.string().valid(...Object.values(models_1.QuestEmployment)).example(models_1.QuestEmployment.FullTime).label('QuestEmployment');
exports.questEmploymentsSchema = Joi.array().items(exports.questEmploymentSchema).label('QuestEmployments');
exports.questPrioritiesSchema = Joi.array().items(common_1.prioritySchema).label('QuestPriorities');
exports.questStatusesSchema = Joi.array().items(exports.questStatusSchema).label('QuestStatuses');
exports.questNonceSchema = Joi.string().default(common_1.idSchema).example('fa0e2e4e-c53f-4af7-8906-1649daa0cce3').label('QuestNonce');
exports.questSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    avatarId: common_1.idSchema,
    assignedWorkerId: common_1.idSchema,
    contractAddress: liquidity_1.contractAddressSchema,
    nonce: exports.questNonceSchema,
    status: exports.questStatusSchema,
    workplace: common_1.workPlaceSchema,
    employment: exports.questEmploymentSchema,
    priority: common_1.prioritySchema,
    location: common_1.locationSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    user: user_1.userShortSchema,
    assignedWorker: user_1.userShortSchema,
    medias: media_1.mediasUrlOnlySchema,
    questChat: exports.questChatSchema,
    questSpecializations: specialization_1.modelSpecializationsSchema,
    raiseView: questRaiseView_1.questRaiseViewSchema,
    startedAt: common_1.isoDateSchema,
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
}).default({ createdAt: 'asc' }).label('QuestsListSort');
exports.betweenPriceSchema = Joi.object({
    from: exports.questPriceSchema.required(),
    to: exports.questPriceSchema.required(),
}).label('BetweenPrice');
exports.questsPayloadSchema = Joi.object({
    specializations: specialization_1.specializationsFilerSchema.unique().default(null),
}).label('QuestsPayload');
exports.questQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.questsListSortSchema,
    priceBetween: exports.betweenPriceSchema.default(null),
    statuses: exports.questStatusesSchema.unique().default(null),
    priorities: exports.questPrioritiesSchema.unique().default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    employments: exports.questEmploymentsSchema.unique().default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.default(null),
    responded: Joi.boolean().default(false),
    invited: Joi.boolean().default(false),
    starred: Joi.boolean().default(false),
}).label('QuestsQuery');
exports.questQueryForGetWorkersSchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.questsListSortSchema,
    priceBetween: exports.betweenPriceSchema.default(null),
    statuses: exports.questStatusesSchema.unique().default(null),
    priorities: exports.questPrioritiesSchema.unique().default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    employments: exports.questEmploymentsSchema.unique().default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('QuestQueryForGetWorkers');
exports.questQueryForMapPointsSchema = Joi.object({
    q: common_1.searchSchema,
    priceBetween: exports.betweenPriceSchema.default(null),
    statuses: exports.questStatusesSchema.unique().default(null),
    priorities: exports.questPrioritiesSchema.unique().default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    employments: exports.questEmploymentsSchema.unique().default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.required(),
    responded: Joi.boolean().default(false),
    invited: Joi.boolean().default(false),
    starred: Joi.boolean().default(false),
}).label('QuestQueryForMapPoints');
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
exports.questReviewMessageSchema = Joi.string().example('Hello, I need this job').label('Message');
exports.questReviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
exports.questReviewSchema = Joi.object({
    reviewId: common_1.idSchema,
    questId: common_1.idSchema,
    fromUserId: common_1.idSchema,
    toUserId: common_1.idSchema,
    message: exports.questReviewMessageSchema,
    mark: exports.questReviewMarkSchema,
    fromUser: user_1.userShortSchema,
    toUser: user_1.userShortSchema,
    quest: exports.questSchema,
    createdAt: common_1.isoDateSchema,
}).label('Review');
exports.reviewsSchema = Joi.array().items(exports.questReviewSchema).label('Reviews');
exports.questForGetSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    avatarId: common_1.idSchema,
    assignedWorkerId: common_1.idSchema,
    contractAddress: liquidity_1.contractAddressSchema,
    nonce: exports.questNonceSchema,
    status: exports.questStatusSchema,
    workplace: common_1.workPlaceSchema,
    employment: exports.questEmploymentSchema,
    priority: common_1.prioritySchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    location: common_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    startedAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
    user: user_1.userShortSchema,
    questChat: exports.questChatSchema,
    medias: media_1.mediasUrlOnlySchema,
    assignedWorker: user_1.userShortSchema,
    questSpecializations: specialization_1.modelSpecializationsSchema,
    raiseView: questRaiseView_1.questRaiseViewSchema,
    openDispute: Joi.object().label('OpenDispute'),
    yourReview: exports.questReviewSchema,
    star: common_1.starSchema,
    invited: exports.questsResponseSchema,
    responded: exports.questsResponseSchema,
    response: exports.questsResponseSchema.allow(null),
}).label('QuestForGet');
exports.questsForGetSchema = Joi.array().items(exports.questForGetSchema).label('QuestsForGet');
exports.questsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    quests: exports.questsForGetSchema,
}).label('QuestsForGetWithCount');
exports.questForAdminsGetSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    avatarId: common_1.idSchema,
    assignedWorkerId: common_1.idSchema,
    contractAddress: liquidity_1.contractAddressSchema,
    nonce: exports.questNonceSchema,
    status: exports.questStatusSchema,
    workplace: common_1.workPlaceSchema,
    employment: exports.questEmploymentSchema,
    priority: common_1.prioritySchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    location: common_1.locationSchema,
    title: exports.questTitleSchema,
    description: exports.questDescriptionSchema,
    price: exports.questPriceSchema,
    startedAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
    user: user_1.userShortSchema,
    questChat: exports.questChatSchema,
    medias: media_1.mediasUrlOnlySchema,
    assignedWorker: user_1.userShortSchema,
    openDispute: Joi.object().label('OpenDispute'),
    questSpecializations: specialization_1.modelSpecializationsSchema,
}).label('QuestForAdminsGet');
exports.questBlackListReasonSchema = Joi.string().example('Quest was blocked').label('QuestBlackListReason');
exports.questBlackListStatusSchema = Joi.number().valid(...Object.keys(models_1.BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.BlackListStatus.Blocked).label('QuestBlackListStatus');
exports.questBlackListSchema = Joi.object({
    id: common_1.idSchema,
    blockedByAdminId: common_1.idSchema,
    unblockedByAdminId: common_1.idSchema,
    questId: common_1.idSchema,
    reason: exports.questBlackListReasonSchema,
    questStatusBeforeBlocking: exports.questStatusesSchema,
    status: exports.questBlackListStatusSchema,
    unblockedAt: common_1.isoDateSchema,
}).label('QuestBlackList');
exports.questDisputeNumberSchema = Joi.number().example('123').label('DisputeNumber');
exports.questDisputeStatusSchema = Joi.number().valid(...Object.keys(models_1.DisputeStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).default(models_1.DisputeStatus.pending).example(models_1.DisputeStatus.pending).label('DisputeStatus');
exports.questDisputeReasonSchema = Joi.string().max(255).valid(...Object.values(models_1.DisputeReason)).default(models_1.DisputeReason.anotherReason).example(models_1.DisputeReason.anotherReason).label('DisputeReason');
exports.questDisputeProblemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescription');
exports.questDisputeDecisionDescriptionSchema = Joi.string().example('Decision is...').label('DecisionDescription');
exports.questDisputeReviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
exports.questDisputeReviewMessageTextSchema = Joi.string().example("Hello world!").label('QuestDisputeMessageText');
exports.questDisputeStatusesSchema = Joi.array().items(exports.questDisputeStatusSchema).label('QuestDisputeStatuses');
exports.questDisputeSchema = Joi.object({
    id: common_1.idSchema,
    questId: common_1.idSchema,
    openDisputeUserId: common_1.idSchema,
    opponentUserId: common_1.idSchema,
    assignedAdminId: common_1.idSchema,
    disputeNumber: exports.questDisputeNumberSchema,
    status: exports.questDisputeStatusSchema,
    reason: exports.questDisputeReasonSchema,
    openOnQuestStatus: exports.questStatusSchema,
    problemDescription: exports.questDisputeProblemDescriptionSchema,
    decisionDescription: exports.questDisputeDecisionDescriptionSchema,
    openDisputeUser: user_1.userShortSchema,
    opponentUser: user_1.userShortSchema,
    assignedAdmin: admin_1.adminSchema,
    quest: exports.questSchema,
    acceptedAt: common_1.isoDateSchema,
    resolveAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
}).label("QuestDispute");
exports.questDisputeQuerySchema = Joi.object({
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    statuses: exports.questDisputeStatusesSchema.unique().default(null),
}).label('disputeQuery');
exports.questDisputesSchema = Joi.array().items(exports.questDisputeSchema).label('QuestDisputes');
exports.questDisputesWithCountSchema = Joi.object({
    count: common_1.countSchema,
    disputes: exports.questDisputeSchema,
}).label('QuestDisputesWithCount');
exports.questDisputeReviewSchema = Joi.object({
    id: common_1.idSchema,
    disputeId: common_1.idSchema,
    fromUserId: common_1.idSchema,
    toAdminId: common_1.idSchema,
    message: exports.questDisputeReviewMessageTextSchema,
    mark: exports.questDisputeReviewMarkSchema,
    fromUser: user_1.userShortSchema,
    toAdmin: admin_1.adminSchema,
    dispute: exports.questDisputeSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label("QuestDisputeReview");
