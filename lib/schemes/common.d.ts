import * as Joi from "joi";
export declare const idSchema: Joi.StringSchema;
export declare const urlSchema: Joi.StringSchema;
export declare const hexTokenSchema: Joi.StringSchema;
export declare const longHexTokenSchema: Joi.StringSchema;
export declare const totpSchema: Joi.StringSchema;
export declare const jwtTokenAccess: Joi.StringSchema;
export declare const jwtTokenRefresh: Joi.StringSchema;
export declare const sortDirectionSchema: Joi.StringSchema;
export declare const isoDateSchema: Joi.StringSchema;
export declare const longitudeSchema: Joi.NumberSchema;
export declare const latitudeSchema: Joi.NumberSchema;
export declare const countSchema: Joi.NumberSchema;
export declare const offsetSchema: Joi.NumberSchema;
export declare const limitSchema: Joi.NumberSchema;
export declare const searchSchema: Joi.StringSchema;
export declare const starSchema: Joi.ObjectSchema<any>;
export declare const likeSchema: Joi.ObjectSchema<any>;
export declare const mobilePhoneFullSchema: Joi.StringSchema;
export declare const mobilePhoneWithoutCountryCodeSchema: Joi.StringSchema;
export declare const numericIdSchema: Joi.NumberSchema;
export declare const idsSchema: Joi.ArraySchema;
export declare const timestampSchema: Joi.DateSchema;
export declare const blockNumberSchema: Joi.NumberSchema;
export declare const outputOkSchema: (res: Joi.Schema) => Joi.Schema;
export declare const paginationFields: {
    limit: Joi.NumberSchema;
    offset: Joi.NumberSchema;
};
export declare function outputPaginationSchema(title: string, item: Joi.Schema): Joi.Schema;
export declare const locationSchema: Joi.ObjectSchema<any>;
export declare const emptyOkSchema: Joi.ObjectSchema<any>;
export declare const jwtTokens: Joi.ObjectSchema<any>;
export declare const phoneSchema: Joi.ObjectSchema<any>;
export declare const prioritySchema: Joi.NumberSchema;
export declare const workPlaceSchema: Joi.StringSchema;
export declare const workPlacesSchema: Joi.ArraySchema;
