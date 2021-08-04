"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const reviewIdSchema = index_1.idSchema.label('ReviewId');
const questIdSchema = index_1.idSchema.label('QuestId');
const fromUserIdSchema = index_1.idSchema.label('FromUserId');
const toUserIdSchema = index_1.idSchema.label('ToUserId');
exports.reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
exports.reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
exports.reviewSchema = Joi.object({
    reviewId: reviewIdSchema,
    questId: questIdSchema,
    fromUserId: fromUserIdSchema,
    toUserId: toUserIdSchema,
    message: exports.reviewMessageSchema,
    mark: exports.reviewMarkSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema,
}).label('ReviewSchema');
exports.reviewsSchema = Joi.array().items(exports.reviewSchema).label('Reviews');
