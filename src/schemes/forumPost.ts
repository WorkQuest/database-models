import * as Joi from "joi";
import {idSchema, isoDateSchema, limitSchema, offsetSchema, textTitleSchema} from "./index";
import { mediaIdsSchema } from "./media";

const forumPostIdSchema = idSchema.label("forumPostId");
const authorIdSchema = idSchema.label("authorId");

export const forumPostSchema = Joi.object({
    // newsSchema
    id: forumPostIdSchema,
    authorId: authorIdSchema,
    text: textTitleSchema,
    forumPostMedia: mediaIdsSchema,
    createdAt: isoDateSchema
}).label("forumPostSchemaResponse");

export const countForumPostSchema = Joi.object({
    // countNewsSchema
    limit: limitSchema,
    offset: offsetSchema,
    forumPostId: forumPostSchema
}).label("countForumPostSchemaResponse");

export const forumPostsSchema = Joi.array().items(countForumPostSchema).label('forumPostsSchemaResponse');
    // newsAllSchema
