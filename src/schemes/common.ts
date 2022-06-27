import * as Joi from "joi";
import { HTTPVerb, PayPeriod, Priority, WorkPlace } from "../models";

export const idSchema = Joi.string().uuid().example("fa0e2e4e-c53f-4af7-8906-1649daa0cce3").label("Id");
export const urlSchema = Joi.string().example("http://example.com/v1/getVideo").label("URL");
export const hexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{6}$/).example("999763").label("HexToken");
export const longHexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{40}$/).example("999763").label("HexToken");
export const totpSchema = Joi.string().regex(/^\d{6}$/).example("123456").label("Totp");
export const jwtTokenAccess = Joi.string().example("access jwt token").label('JwtTokenAccess');
export const jwtTokenRefresh = Joi.string().example("refresh jwt token").label('JwtTokenRefresh');
export const sortDirectionSchema = Joi.string().valid("ASC", "DESC", "asc", "desc").label('SortDirection');
export const isoDateSchema = Joi.string().isoDate().example("2021-05-12T05:24:47.322Z").label('IsoDate');
export const timeInSecondSchema = Joi.number().example(56443).label('TimeInSecond');
export const longitudeSchema = Joi.number().min(-180).max(180).example(84.948846).label("Longitude");
export const latitudeSchema = Joi.number().min(-90).max(90).example(56.48122).label("Latitude");
export const countSchema = Joi.number().example(10).label('Count');
export const offsetSchema = Joi.number().min(0).default(0).label("Offset");
export const limitSchema = Joi.number().min(0).default(10).max(100).label('Limit');
export const searchSchema = Joi.string().default(null).max(255).label('Search');
export const starSchema = Joi.object().allow(null).label('Star');
export const likeSchema = Joi.object().allow(null).label('Like');
export const mobilePhoneFullSchema = Joi.string().pattern(/^\+\d{1,4}\d{10}$/).example('+79998887766').label('MobilePhoneFull');
export const mobilePhoneWithoutCountryCodeSchema = Joi.string().example('9998887766').label('MobilePhoneWithoutCountryCode');
export const numericIdSchema = Joi.number().example(3).label("NumericId");
export const idsSchema = Joi.array().items(idSchema).label('Ids');
export const timestampSchema = Joi.date().timestamp('unix').example(1631568392).label('timeStamp');
export const transactionHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("TransactionHash");
export const blockNumberSchema = Joi.number().example(14382).label('BlockNumber');
export const locationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('LocationPlaceName');
export const coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
export const accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddress");
export const accountAddressesSchema = Joi.array().items(accountAddressSchema).label('AccountAddresses');
export const HTTPVerbSchema = Joi.string().valid(...Object.values(HTTPVerb)).example(HTTPVerb.POST).label('HTTPVerb');
export const inputFromLoginSchema = Joi.string().valid('main', 'dao').label('InputFromLogin');

export const outputOkSchema = (res: Joi.Schema): Joi.Schema => {
  return Joi.object({
    ok: Joi.boolean().example(true),
    result: res
  });
};

export const paginationFields = {
  limit: Joi.number().integer().default(10).max(100).example(10),
  offset: Joi.number().integer().default(0).example(5)
};

export function outputPaginationSchema(title: string, item: Joi.Schema): Joi.Schema {
  return Joi.object({
    ok: Joi.boolean().example(true),
    result: Joi.object({
      count: Joi.number().integer().example(10),
      [title]: Joi.array().items(item)
    })
  });
}

export const locationSchema = Joi.object({
  longitude: longitudeSchema.required(),
  latitude: latitudeSchema.required(),
}).label('Location');

export const emptyOkSchema = Joi.object({
  ok: Joi.boolean().example(true)
}).label("EmptyOkResponse");

export const jwtTokens = Joi.object({
  access: jwtTokenAccess,
  refresh: jwtTokenRefresh,
}).label("JwtTokensSchema");

export const phoneSchema = Joi.object({
  codeRegion: Joi.string().example('+7').label('CodeRegion'),
  phone: mobilePhoneWithoutCountryCodeSchema,
  fullPhone: mobilePhoneFullSchema
}).label('UserPhoneSchema');

export const locationFullSchema = Joi.object({
  location: locationSchema.required(),
  locationPlaceName: locationPlaceNameSchema.required(),
}).label('LocationFull');

export const searchByNorthAndSouthCoordinatesSchema = Joi.object({
  north: locationSchema.required(),
  south: locationSchema.required(),
}).label('SearchByNorthAndSouthCoordinates');

export const sessionPlaceSchema = Joi.object({
  city: Joi.string().label('SessionPlaceCity'),
  country: Joi.string().label('SessionPlaceCountry'),
}).label('SessionPlace');

export const prioritySchema = Joi.number().valid(...Object.keys(Priority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(Priority.AllPriority).label('Priority');
export const prioritiesSchema = Joi.array().items(prioritySchema).label('Priorities');

export const workPlaceSchema = Joi.string().valid(...Object.values(WorkPlace)).example(WorkPlace.Remote).label('WorkPlace');
export const workPlacesSchema = Joi.array().items(workPlaceSchema).label('WorkPlaces');
export const payPeriodSchema = Joi.string().valid(...Object.values(PayPeriod)).example(PayPeriod.FixedPeriod).label('PayPeriod');
export const payPeriodsSchema = Joi.array().items(payPeriodSchema).label('PayPeriods');

