"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStatisticsSchema = exports.ratingStatisticSchema = exports.ratingStatusesSchema = exports.ratingStatusSchema = exports.ratingStatisticAverageMarkSchema = exports.ratingStatisticReviewCountSchema = exports.questsStatisticSchema = exports.openedSchema = exports.completedSchema = exports.chatsStatisticSchema = exports.chatStatisticUnreadCountMessagesSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
exports.chatStatisticUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');
exports.chatsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    unreadCountChats: exports.chatStatisticUnreadCountMessagesSchema,
});
exports.completedSchema = Joi.number().example(25).label('CompletedQuests');
exports.openedSchema = Joi.number().example(27).label('OpenedQuests');
exports.questsStatisticSchema = Joi.object({
    completed: exports.completedSchema,
    opened: exports.openedSchema,
}).label('QuestsStatistic');
exports.ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
exports.ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');
exports.ratingStatusSchema = Joi.string().valid(...Object.values(models_1.RatingStatus)).example(models_1.RatingStatus.topRanked).label("RatingStatus");
exports.ratingStatusesSchema = Joi.array().items(exports.ratingStatusSchema).label('RatingStatuses');
exports.ratingStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    reviewCount: exports.ratingStatisticReviewCountSchema,
    averageMark: exports.ratingStatisticAverageMarkSchema,
    status: exports.ratingStatusSchema,
}).label('RatingStatistic');
exports.userStatisticsSchema = Joi.object({
    chatsStatistic: exports.chatsStatisticSchema,
    questsStatistic: exports.questsStatisticSchema,
    ratingStatistic: exports.ratingStatisticSchema
}).label('UserStatistics');
