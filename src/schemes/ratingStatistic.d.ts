import * as Joi from 'joi';
export declare const ratingStatisticReviewCountSchema: Joi.NumberSchema;
export declare const ratingStatisticAverageMarkSchema: Joi.NumberSchema;
export declare const ratingStatisticSchema: {
    id: Joi.StringSchema;
    userId: Joi.StringSchema;
    reviewCount: Joi.NumberSchema;
    averageMark: Joi.NumberSchema;
};
