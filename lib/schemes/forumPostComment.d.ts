import * as Joi from "joi";
export declare const textTitleSchema: Joi.StringSchema;
export declare const forumPostRootCommentIdSchema: Joi.AlternativesSchema;
export declare const forumPostCommentSchema: Joi.ObjectSchema<any>;
export declare const forumPostCountCommentsSchema: Joi.ObjectSchema<any>;
export declare const forumPostCommentsSchema: Joi.ArraySchema;
