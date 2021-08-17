"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const media_1 = require("./media");
const user_1 = require("./user");
const reviewIdSchema = common_1.idSchema.label('ReviewId');
const questIdSchema = common_1.idSchema.label('QuestId');
const fromUserIdSchema = common_1.idSchema.label('FromUserId');
const toUserIdSchema = common_1.idSchema.label('ToUserId');
const userIdSchema = common_1.idSchema.label('UserId');
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
exports.reviewShortSchema = Joi.object({
    id: userIdSchema,
    avatarId: media_1.mediaIdsSchema,
    firstName: user_1.userFirstNameSchema,
    lastName: user_1.userLastNameSchema,
});
exports.reviewsSchema = Joi.array().items(exports.reviewSchema).label('Reviews');
