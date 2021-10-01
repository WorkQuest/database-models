import * as Joi from "joi";

export const idSchema = Joi.string().uuid().example("fa0e2e4e-c53f-4af7-8906-1649daa0cce3").label("Id");
export const urlSchema = Joi.string().example("http://example.com/v1/getVideo").label("URL");
export const hexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{6}$/).example("999763").label("HexToken");
export const longHexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{40}$/).example("999763").label("HexToken");
export const totpSchema = Joi.string().regex(/^\d{6}$/).example("123456").label("Totp");
export const jwtTokenAccess = Joi.string().example("access jwt token").label('JwtTokenAccess');
export const jwtTokenRefresh = Joi.string().example("refresh jwt token").label('JwtTokenRefresh');
export const sortDirectionSchema = Joi.string().valid("ASC", "DESC", "asc", "desc").label('SortDirection');
export const isoDateSchema = Joi.string().isoDate().example("2021-05-12T05:24:47.322Z").label('IsoDate');
export const longitudeSchema = Joi.number().min(-180).max(180).example(84.948846).label("Longitude");
export const latitudeSchema = Joi.number().min(-90).max(90).example(56.48122).label("Latitude");
export const countSchema = Joi.number().example(10).label('Count');
export const offsetSchema = Joi.number().min(0).default(0).label("Offset");
export const limitSchema = Joi.number().min(0).default(10).max(100).label('Limit');
export const searchSchema = Joi.string().default(null).max(255).label('Search');
export const starSchema = Joi.object().allow(null).label('Star');
export const mobilePhoneSchema = Joi.string().pattern(/^\+\d{1,4}\d{10}$/).label('MobilePhone');

export const idsSchema = Joi.array().items(idSchema).label('Ids');

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
  longitude: longitudeSchema,
  latitude: latitudeSchema,
}).label('Location');

export const emptyOkSchema = Joi.object({
  ok: Joi.boolean().example(true)
}).label("EmptyOkResponse");

export const jwtTokens = Joi.object({
  access: jwtTokenAccess,
  refresh: jwtTokenRefresh,
}).label("JwtTokensSchema");
