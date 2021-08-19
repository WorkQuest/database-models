import * as Joi from "joi";
import {idSchema, isoDateSchema, limitSchema, offsetSchema, textTitleSchema} from "./index";
import { mediaIdsSchema } from "./media";

const newsIdSchema = idSchema.label("newsId");
const authorIdSchema = idSchema.label("authorId");

export const newsSchema = Joi.object({
    id: newsIdSchema,
    authorId: authorIdSchema,
    text: textTitleSchema,
    newsMedia: mediaIdsSchema,
    createdAt: isoDateSchema
}).label("NewsSchema");

export const countNewsSchema = Joi.object({
    limit: limitSchema,
    offset: offsetSchema,
    news: newsSchema
}).label("countNewsSchema");

export const newsAllSchema = Joi.array().items(countNewsSchema).label('NewsAllSchema');
