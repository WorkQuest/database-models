import * as Joi from "joi";
import {idSchema, isoDateSchema, limitSchema, offsetSchema} from "./index";
import { mediaIdsSchema } from "./media";

const forumPostIdSchema = idSchema.label("forumPostId");
const authorIdSchema = idSchema.label("authorId");
export const textTitleSchema = Joi.string().example("Text...").label("Text");

export const forumPostSchema = Joi.object({
    id: forumPostIdSchema,
    authorId: authorIdSchema,
    title: textTitleSchema,
    forumPostMedia: mediaIdsSchema,
    createdAt: isoDateSchema
}).label("forumPostSchemaResponse");

export const countForumPostSchema = Joi.object({
    limit: limitSchema,
    offset: offsetSchema,
    forumPostId: forumPostSchema
}).label("countForumPostSchemaResponse");

export const forumPostsSchema = Joi.array().items(countForumPostSchema).label('forumPostsSchemaResponse');
