"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const questsStatistic_1 = require("./questsStatistic");
const ratingStatistic_1 = require("./ratingStatistic");
const common_1 = require("./common");
exports.chatStatisticUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');
exports.chatsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    unreadMessages: exports.chatStatisticUnreadCountMessagesSchema,
});
exports.userStatisticsSchema = Joi.object({
    chatsStatistic: exports.chatsStatisticSchema,
    questsStatistic: questsStatistic_1.questsStatisticSchema,
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema
}).label('UserStatistics');
