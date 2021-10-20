import * as Joi from "joi";
export declare const userEmailSchema: Joi.StringSchema;
export declare const userPasswordSchema: Joi.StringSchema;
export declare const userFirstNameSchema: Joi.StringSchema;
export declare const userLastNameSchema: Joi.StringSchema;
export declare const userStatusSchema: Joi.NumberSchema;
export declare const userRoleSchema: Joi.StringSchema;
export declare const userSocialMediaNicknamesSchema: Joi.ObjectSchema<any>;
export declare const userKnowledgeSchema: Joi.ObjectSchema<any>;
export declare const userWorkExperienceSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoWorkerSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoEmployerSchema: Joi.ObjectSchema<any>;
export declare const userCommonAdditionalInfoSchema: Joi.ObjectSchema<any>;
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const userEmployerSchema: Joi.ObjectSchema<any>;
export declare const userWorkerSchema: Joi.ObjectSchema<any>;
export declare const userShortSchema: Joi.ObjectSchema<any>;
export declare const userReviewSchema: Joi.ObjectSchema<any>;
export declare const userListSortSchema: Joi.ObjectSchema<any>;
export declare const userQuerySchema: Joi.ObjectSchema<any>;
export declare const usersSchema: Joi.ArraySchema;
export declare const userEmployersSchema: Joi.ArraySchema;
export declare const userWorkersSchema: Joi.ArraySchema;
export declare const usersShortSchema: Joi.ArraySchema;
export declare const tokensWithStatus: Joi.ObjectSchema<any>;
