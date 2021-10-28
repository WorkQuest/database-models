"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discussionCommentsSchema = exports.discussionsSchema = exports.discussionSchema = exports.discussionDescriptionSchema = exports.discussionTitleSchema = exports.discussionCommentSchema = exports.discussionCommentTextSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const media_1 = require("./media");
const user_1 = require("./user");
exports.discussionCommentTextSchema = Joi.string().example('New Comment').label('DiscussionCommentText');
exports.discussionCommentSchema = Joi.object({
    id: common_1.idSchema,
    authorId: common_1.idSchema,
    discussionId: common_1.idSchema,
    rootCommentId: common_1.idSchema,
    text: exports.discussionCommentTextSchema,
    amountLikes: common_1.countSchema,
    amountSubComments: common_1.countSchema,
    author: user_1.userShortSchema,
    medias: media_1.mediasUrlOnlySchema,
    createdAt: common_1.isoDateSchema,
}).label('DiscussionComment');
exports.discussionTitleSchema = Joi.string().example('New post').label('DiscussionTitle');
exports.discussionDescriptionSchema = Joi.string().example('Hello World!').label('DiscussionText');
exports.discussionSchema = Joi.object({
    id: common_1.idSchema,
    authorId: common_1.idSchema,
    title: exports.discussionTitleSchema,
    description: exports.discussionDescriptionSchema,
    amountLikes: common_1.countSchema,
    amountComments: common_1.countSchema,
    medias: media_1.mediasUrlOnlySchema,
    author: user_1.userShortSchema,
    createdAt: common_1.isoDateSchema,
}).label('Discussion');
exports.discussionsSchema = Joi.array().items(exports.discussionSchema).label('Discussions');
exports.discussionCommentsSchema = Joi.array().items(exports.discussionCommentSchema).label('DiscussionComments');