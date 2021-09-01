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
export declare const outputOkSchema: (res: Joi.Schema) => Joi.Schema;
export declare const paginationFields: {
    limit: Joi.NumberSchema;
    offset: Joi.NumberSchema;
};
export declare function outputPaginationSchema(title: string, item: Joi.Schema): Joi.Schema;
export declare const locationSchema: Joi.ObjectSchema<any>;
export declare const emptyOkSchema: Joi.ObjectSchema<any>;
export declare const jwtTokens: Joi.ObjectSchema<any>;
