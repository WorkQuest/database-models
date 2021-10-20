"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
exports.reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
exports.reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
exports.reviewSchema = Joi.object({
    reviewId: common_1.idSchema,
    questId: common_1.idSchema,
    fromUserId: common_1.idSchema,
    toUserId: common_1.idSchema,
    message: exports.reviewMessageSchema,
    mark: exports.reviewMarkSchema,
    fromUser: user_1.userShortSchema,
    createdAt: common_1.isoDateSchema,
}).label('ReviewSchema');
exports.reviewsSchema = Joi.array().items(exports.reviewSchema).label('Reviews');
