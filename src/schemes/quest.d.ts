import * as Joi from "joi";
export declare const questCategorySchema: Joi.StringSchema;
export declare const questStatusSchema: Joi.NumberSchema;
export declare const questPrioritySchema: Joi.NumberSchema;
export declare const questTitleSchema: Joi.StringSchema;
export declare const questDescriptionSchema: Joi.StringSchema;
export declare const questPriceSchema: Joi.StringSchema;
export declare const questAdTypeSchema: Joi.NumberSchema;
export declare const questSchema: Joi.ObjectSchema<any>;
export declare const questFullSchema: Joi.ObjectSchema<any>;
export declare const questsSchema: Joi.ArraySchema;
export declare const questsFullSchema: Joi.ArraySchema;
export declare const questsListSortSchema: Joi.ObjectSchema<any>;
export declare const questsQuerySchema: Joi.ObjectSchema<any>;