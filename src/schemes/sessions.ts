import * as Joi from "joi";
import {idSchema, isoDateSchema} from "./common";
import {userShortSchema} from "./user";

export const sessionCountrySchema = Joi.string().example('Russia').label('SessionCountry');
export const sessionCitySchema = Joi.string().example('Tokyo').label('SessionCity');
export const sessionInvalidatingSchema = Joi.boolean().example(true).label('SessionInvalidating');
export const sessionIpSchema = Joi.string().example('127.0.0.1').label('SessionInvalidating');
export const sessionDeviceSchema = Joi.string().example('Mozilla/5.0 (X11; Windows x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Mozilla/93.1.2805.48 Safari/537.36').label('SessionInvalidating');

export const sessionPlaceSchema = Joi.object({
  country: sessionCountrySchema,
  city: sessionCitySchema,
});

export const sessionSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  place: sessionPlaceSchema,
  invalidating: sessionInvalidatingSchema,
  ip: sessionIpSchema,
  device: sessionDeviceSchema,
  logoutAt: isoDateSchema,
  user: userShortSchema,
}).label('Session');
