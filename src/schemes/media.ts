import * as Joi from "joi";
import { ContentType } from "../models";
import { idSchema, urlSchema } from "./common";

export const mediaContentTypeSchema = Joi.string().valid(...Object.values(ContentType)).example(ContentType.png).label("ContentType");
export const mediaHashSchema = Joi.number().min(60).max(60).label("MediaHash");

export const mediaUrlOnlySchema = Joi.object({
  id: idSchema,
  url: urlSchema,
  contentType: mediaContentTypeSchema
}).label("MediaUrlOnly");

export const mediaUploadLinkSchema = Joi.object({
  mediaId: idSchema,
  url: urlSchema,
}).label('MediaUploadLink');

export const mediaSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  contentType: mediaContentTypeSchema,
  url: urlSchema,
  hash: mediaHashSchema,
}).label('Media');

export const mediasUrlOnlySchema = Joi.array().items(mediaUrlOnlySchema).label('MediasUrlOnly');
