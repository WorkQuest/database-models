import * as Joi from "joi";
import { ContentType } from "../models";
import { idSchema, urlSchema } from "./common";

const mediaIdSchema = idSchema.label("MediaId");
export const mediaContentTypeSchema = Joi.string().valid(...Object.values(ContentType)).example(ContentType.png).label("ContentType");
export const mediaHashSchema = Joi.number().min(60).max(60).label("MediaHash");

export const mediaUrlOnlySchema = Joi.object({
  id: mediaIdSchema,
  url: urlSchema,
  contentType: mediaContentTypeSchema
}).label("MediaUrlOnlyScheme");

export const mediaUploadLinkSchema = Joi.object({
  mediaId: mediaIdSchema,
  url: urlSchema,
}).label('MediaUploadLink');

export const mediaSchema = Joi.object({
  id: mediaIdSchema,
  userId: idSchema.label("UserId"),
  contentType: mediaContentTypeSchema,
  url: urlSchema,
  hash: mediaHashSchema,
}).label('MediaScheme');

export const mediaIdsSchema = Joi.array().items(mediaIdSchema).label("MediaIdsArray");
export const mediasUrlOnlySchema = Joi.array().items(mediaUrlOnlySchema).label('MediasUrlOnlyScheme');
