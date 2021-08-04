"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const ratingStatisticIdSchema = index_1.idSchema.label('RatingStatisticId');
const userIdSchema = index_1.idSchema.label('UserId');
exports.ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
exports.ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');
exports.ratingStatisticSchema = {
    id: ratingStatisticIdSchema,
    userId: userIdSchema,
    reviewCount: exports.ratingStatisticReviewCountSchema,
    averageMark: exports.ratingStatisticAverageMarkSchema,
};
