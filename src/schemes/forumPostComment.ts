import * as Joi from "joi";
import { idSchema, isoDateSchema, limitSchema,offsetSchema} from "./index";

const forumPostCommentIdSchema = idSchema.label("forumPostCommentId");
const authorIdSchema = idSchema.label("authorId");
const forumPostIdSchema = idSchema.label("forumPostId");
export const textTitleSchema = Joi.string().example("Text...").label("Text");
export const forumPostRootCommentIdSchema = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("IdOrNull");

export const forumPostCommentSchema = Joi.object({
    // commentSchema
    id: forumPostCommentIdSchema,
    authorId: authorIdSchema,
    forumPostId: forumPostIdSchema,
    rootCommentId: forumPostRootCommentIdSchema,
    text: textTitleSchema,
    createdAt: isoDateSchema,
}).label("forumPostCommentSchemaResponse");

export const forumPostCountCommentsSchema = Joi.object({
    // countCommentSchema
    limit: limitSchema,
    offset: offsetSchema,
    comments: forumPostCommentSchema
}).label("forumPostCountCommentsSchemaResponse");

export const forumPostCommentsSchema = Joi.array().items(forumPostCountCommentsSchema).label('forumPostCommentsSchemaResponse');
    // commentsSchema
