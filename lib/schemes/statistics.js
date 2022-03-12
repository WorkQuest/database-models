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
exports.userStatisticsSchema = exports.ratingStatisticSchema = exports.ratingStatusSchema = exports.ratingStatisticAverageMarkSchema = exports.ratingStatisticReviewCountSchema = exports.questsStatisticSchema = exports.openedSchema = exports.completedSchema = exports.chatsStatisticSchema = exports.chatStatisticUnreadCountMessagesSchema = void 0;
const Joi = __importStar(require("joi"));
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
