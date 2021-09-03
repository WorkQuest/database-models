import * as Joi from "joi";
import {idSchema, limitSchema, offsetSchema} from "./common";

const countLikeSchema = Joi.number().min(0).label('countLikes');

const likeIdSchema = idSchema.label('likeId')
const newsIdSchema = idSchema.label('newsId')
const userIdSchema = idSchema.label('newsId')

export const likeNewsSchema = Joi.object({
    id: likeIdSchema,
    newsId: newsIdSchema,
    userId: userIdSchema,
}).label('likeNewsSchema')

export const allCountsLikeNewsSchema = Joi.array().items(likeNewsSchema).label('NewsAllSchema');

export const getCountsLikeNewsSchema = Joi.object({
    limit: limitSchema,
    offset: offsetSchema,
    count: countLikeSchema,
    likesId: allCountsLikeNewsSchema
})
