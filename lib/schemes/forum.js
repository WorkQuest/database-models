"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forumPostsSchema = exports.forumPostSchema = exports.forumPostTextSchema = exports.forumPostTitleSchema = exports.forumCommentSchema = exports.forumCommentTextSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const media_1 = require("./media");
exports.forumCommentTextSchema = Joi.string().example('New Comment').label('ForumCommentText');
exports.forumCommentSchema = Joi.object({
    id: common_1.idSchema,
    authorId: common_1.idSchema,
    forumPostId: common_1.idSchema,
    rootCommentId: common_1.idSchema,
    text: exports.forumCommentTextSchema,
    createdAt: common_1.isoDateSchema,
}).label('ForumComment');
exports.forumPostTitleSchema = Joi.string().example('New post').label('ForumPostTitle');
exports.forumPostTextSchema = Joi.string().example('Hello World!').label('ForumPostText');
exports.forumPostSchema = Joi.object({
    id: common_1.idSchema,
    authorId: common_1.idSchema,
    title: exports.forumPostTitleSchema,
    text: exports.forumPostTextSchema,
    medias: media_1.mediasUrlOnlySchema,
    createdAt: common_1.isoDateSchema,
}).label('ForumPost');
exports.forumPostsSchema = Joi.array().items(exports.forumPostSchema).label('ForumPosts');
