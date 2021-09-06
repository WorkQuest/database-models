import * as Joi from "joi";
import {idSchema, limitSchema, offsetSchema} from "./common";

const forumPostCountLikeSchema = Joi.number().min(0).label('forumPostCountLike');

const forumPostLikeIdSchema = idSchema.label('forumPostLikeId')
const forumPostIdSchema = idSchema.label('forumPostId')
const userIdSchema = idSchema.label('newsId')

export const forumPostLikeSchema = Joi.object({
    // likeNewsSchema
    id: forumPostLikeIdSchema,
    forumPostId: forumPostIdSchema,
    userId: userIdSchema,
}).label('forumPostLikeSchemaResponse')

export const forumPostLikesCountSchema = Joi.array().items(forumPostLikeSchema).label('forumPostLikesCountSchemaResponse');
// allCountsLikeNewsSchema

export const forumPostGetLikesSchema = Joi.object({
    // getCountsLikeNewsSchema
    limit: limitSchema,
    offset: offsetSchema,
    count: forumPostCountLikeSchema,
    likes: forumPostLikesCountSchema
}).label('forumPostGetLikesSchemaResponse')
