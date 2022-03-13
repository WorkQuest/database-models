import * as Joi from "joi";
export declare const discussionCommentTextSchema: Joi.StringSchema;
export declare const discussionCommentLevelSchema: Joi.NumberSchema;
export declare const discussionCommentSchema: Joi.ObjectSchema<any>;
export declare const discussionTitleSchema: Joi.StringSchema;
export declare const discussionDescriptionSchema: Joi.StringSchema;
export declare const discussionSchema: Joi.ObjectSchema<any>;
export declare const discussionForGetSchema: Joi.ObjectSchema<any>;
export declare const discussionsSchema: Joi.ArraySchema;
export declare const discussionsForGetSchema: Joi.ArraySchema;
export declare const discussionCommentsSchema: Joi.ArraySchema;
