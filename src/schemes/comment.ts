import * as Joi from "joi";
import {countNewsSchema, idSchema, isoDateSchema, limitSchema, newsSchema, offsetSchema} from "./index";

const commentIdSchema = idSchema.label("commentId");
const authorIdSchema = idSchema.label("authorId");
const newsIdSchema = idSchema.label("newsId");
export const textTitleSchema = Joi.string().example("Text...").label("Text");
export const commentIdOrNullSchema = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("IdOrNull");

export const commentSchema = Joi.object({
    id: commentIdSchema,
    authorId: authorIdSchema,
    newsId: newsIdSchema,
    rootCommentId: commentIdOrNullSchema,
    text: textTitleSchema,
    createdAt: isoDateSchema,
}).label("newsForumSchema");

export const countCommentSchema = Joi.object({
    limit: limitSchema,
    offset: offsetSchema,
    comments: commentSchema
}).label("countNewsSchema");

export const commentsSchema = Joi.array().items(countCommentSchema).label('NewsAllSchema');
