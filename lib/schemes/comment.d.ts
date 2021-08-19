import * as Joi from "joi";
export declare const textTitleSchema: Joi.StringSchema;
export declare const commentIdOrNullSchema: Joi.AlternativesSchema;
export declare const commentSchema: Joi.ObjectSchema<any>;
export declare const countCommentSchema: Joi.ObjectSchema<any>;
export declare const commentsSchema: Joi.ArraySchema;
