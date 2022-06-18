"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.adminSupportStatisticSchema = exports.adminDisputeStatisticSchema = exports.reportStatisticSchema = exports.reportEntityStatisticSchema = exports.disputeDecideStatisticSchema = exports.adminQuestDisputesStatisticSchema = exports.userStatisticsSchema = exports.userRatingStatisticSchema = exports.userRatingStatusesSchema = exports.userRatingStatusSchema = exports.questsStatisticSchema = exports.userChatsStatisticSchema = exports.adminChatsStatisticSchema = exports.chatsStatisticTypeSchema = exports.statisticAverageMark = void 0;
const Joi = __importStar(require("joi"));
const models_1 = require("../models");
const common_1 = require("./common");
exports.statisticAverageMark = Joi.number().example(3.5).label('StatisticAverageMark');
exports.chatsStatisticTypeSchema = Joi.string().valid(...Object.values(models_1.MemberType)).example(models_1.MemberType.User).label("ChatsStatisticType");
exports.adminChatsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    type: exports.chatsStatisticTypeSchema,
    unreadCountChats: common_1.countSchema,
});
exports.userChatsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    type: exports.chatsStatisticTypeSchema,
    unreadCountChats: common_1.countSchema,
});
exports.questsStatisticSchema = Joi.object({
    completed: common_1.countSchema,
    opened: common_1.countSchema,
}).label('QuestsStatistic');
exports.userRatingStatusSchema = Joi.number().valid(...Object.keys(models_1.RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.RatingStatus.NoStatus).label('RatingStatus');
exports.userRatingStatusesSchema = Joi.array().items(exports.userRatingStatusSchema).label('UserStatisticRatingStatuses');
exports.userRatingStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    reviewCount: common_1.countSchema,
    averageMark: exports.statisticAverageMark,
    status: exports.userRatingStatusSchema,
}).label('RatingStatistic');
exports.userStatisticsSchema = Joi.object({
    chatsStatistic: exports.userChatsStatisticSchema,
    questsStatistic: exports.questsStatisticSchema,
    ratingStatistic: exports.userRatingStatisticSchema,
}).label('UserStatistics');
exports.adminQuestDisputesStatisticSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    reviewCount: common_1.countSchema,
    averageMark: exports.statisticAverageMark,
    resolvedQuestDisputes: common_1.countSchema,
    averageResolutionTimeInSeconds: common_1.timeInSecondSchema,
}).label('AdminQuestDisputesStatistic');
exports.disputeDecideStatisticSchema = Joi.object({
    AcceptWork: common_1.percentSchema,
    RejectWork: common_1.percentSchema,
    Rework: common_1.percentSchema
}).label('DisputeDecideStatistic');
exports.reportEntityStatisticSchema = Joi.object({
    Decided: common_1.percentSchema,
    Rejected: common_1.percentSchema
}).label('ReportEntityStatistic');
exports.reportStatisticSchema = Joi.object({
    User: exports.reportEntityStatisticSchema,
    Quest: exports.reportEntityStatisticSchema
}).label('ReportStatistic');
exports.adminDisputeStatisticSchema = Joi.object({
    disputeDecideStatistic: exports.disputeDecideStatisticSchema,
    reportStatistic: exports.reportStatisticSchema,
    disputeStatistic: exports.adminQuestDisputesStatisticSchema
}).label('AdminDisputeStatistic');
exports.adminSupportStatisticSchema = Joi.object({
    Decided: common_1.countSchema,
    Rejected: common_1.countSchema,
    Pending: common_1.countSchema
}).label('SupportStatistic');
