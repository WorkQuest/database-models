"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsSchema = exports.reviewSchema = exports.reviewMarkSchema = exports.reviewMessageSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const reviewIdSchema = common_1.idSchema.label('ReviewId');
const questIdSchema = common_1.idSchema.label('QuestId');
const fromUserIdSchema = common_1.idSchema.label('FromUserId');
const toUserIdSchema = common_1.idSchema.label('ToUserId');
exports.reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
exports.reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
exports.reviewSchema = Joi.object({
    reviewId: reviewIdSchema,
    questId: questIdSchema,
    fromUserId: fromUserIdSchema,
    toUserId: toUserIdSchema,
    message: exports.reviewMessageSchema,
    mark: exports.reviewMarkSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('ReviewSchema');
exports.reviewsSchema = Joi.array().items(exports.reviewSchema).label('Reviews');
