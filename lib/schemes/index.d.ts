import * as Joi from 'joi';
export declare const jwtTokenAccess: Joi.StringSchema;
export declare const jwtTokenRefresh: Joi.StringSchema;
export declare const outputOkSchema: (res: Joi.Schema<any>) => Joi.Schema<any>;
export declare function outputPaginationSchema(title: string, item: Joi.Schema): Joi.Schema;
export declare const emptyOutputSchema: Joi.ObjectSchema<any>;
export declare const jwtTokens: Joi.ObjectSchema<any>;
