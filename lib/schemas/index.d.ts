import * as Joi from "joi";
export declare const outputOkSchema: (res: Joi.Schema) => Joi.Schema;
export declare function outputPaginationSchema(title: string, item: Joi.Schema): Joi.Schema;
export declare const hexTokenSchema: Joi.StringSchema;
export declare const totpSchema: Joi.StringSchema;
export declare const emptyOkSchema: Joi.ObjectSchema<any>;
export declare const jwtTokens: Joi.ObjectSchema<any>;
