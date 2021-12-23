"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const chat_1 = require("./chat");
const questsStatistic_1 = require("./questsStatistic");
const ratingStatistic_1 = require("./ratingStatistic");
exports.userStatisticsSchema = Joi.object({
    chatsStatistic: chat_1.chatsStatisticSchema,
    questsStatistic: questsStatistic_1.questsStatisticSchema,
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema
}).label('UserStatistics');
