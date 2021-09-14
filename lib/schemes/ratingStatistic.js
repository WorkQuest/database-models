"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingStatisticSchema = exports.ratingStatisticAverageMarkSchema = exports.ratingStatisticReviewCountSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
exports.ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
exports.ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');
exports.ratingStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    reviewCount: exports.ratingStatisticReviewCountSchema,
    averageMark: exports.ratingStatisticAverageMarkSchema,
}).label('RatingStatistic');
