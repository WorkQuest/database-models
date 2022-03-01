"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const models_1 = require("../models");
const common_1 = require("./common");
exports.statisticAverageMark = Joi.number().example(3.5).label('StatisticAverageMark');
exports.chatsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    unreadCountChats: common_1.countSchema,
});
exports.questsStatisticSchema = Joi.object({
    completed: common_1.countSchema,
    opened: common_1.countSchema,
}).label('QuestsStatistic');
exports.userRatingStatusSchema = Joi.string().valid(...Object.values(models_1.RatingStatus)).example(models_1.RatingStatus.topRanked).label("UserStatisticRatingStatus");
exports.userRatingStatusesSchema = Joi.array().items(exports.userRatingStatusSchema).label('UserStatisticRatingStatuses');
exports.userRatingStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    reviewCount: common_1.countSchema,
    averageMark: exports.statisticAverageMark,
    status: exports.userRatingStatusSchema,
}).label('RatingStatistic');
exports.userStatisticsSchema = Joi.object({
    chatsStatistic: exports.chatsStatisticSchema,
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
