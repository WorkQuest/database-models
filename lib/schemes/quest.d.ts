import * as Joi from "joi";
export declare const questCategorySchema: Joi.StringSchema;
export declare const questStatusSchema: Joi.NumberSchema;
export declare const questPrioritySchema: Joi.NumberSchema;
export declare const questTitleSchema: Joi.StringSchema;
export declare const questDescriptionSchema: Joi.StringSchema;
export declare const questPriceSchema: Joi.StringSchema;
export declare const questAdTypeSchema: Joi.NumberSchema;
export declare const questLocationPlaceNameSchema: Joi.StringSchema;
export declare const questWorkPlaceSchema: Joi.StringSchema;
export declare const questSchema: Joi.ObjectSchema<any>;
export declare const questsSchema: Joi.ArraySchema;
export declare const questsWithCountSchema: Joi.ObjectSchema<any>;
export declare const questsListSortSchema: Joi.ObjectSchema<any>;
export declare const questsQuerySchema: Joi.ObjectSchema<any>;
export declare const locationForValidateSchema: Joi.ObjectSchema<any>;
export declare const questsResponseMessageSchema: Joi.StringSchema;
export declare const questsResponseStatusSchema: Joi.NumberSchema;
export declare const questsResponseTypeSchema: Joi.NumberSchema;
export declare const questsResponseSchema: Joi.ObjectSchema<any>;
export declare const questsResponsesSchema: Joi.ArraySchema;
export declare const questsResponsesWithCountSchema: Joi.ObjectSchema<any>;
export declare const questForGetSchema: Joi.ObjectSchema<any>;
export declare const questsForGetSchema: Joi.ArraySchema;
export declare const questsForGetWithCountSchema: Joi.ObjectSchema<any>;
