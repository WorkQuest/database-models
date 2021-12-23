"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chat_1 = require("./chat");
const questsStatistic_1 = require("./questsStatistic");
const ratingStatistic_1 = require("./ratingStatistic");
exports.userStatistics = {
    chatsStatistic: chat_1.chatsStatisticSchema,
    questsStatistic: questsStatistic_1.questsStatisticSchema,
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema
};
