import * as Joi from "joi";
export declare const userEmailSchema: Joi.StringSchema;
export declare const userPasswordSchema: Joi.StringSchema;
export declare const userFirstNameSchema: Joi.StringSchema;
export declare const userLastNameSchema: Joi.StringSchema;
export declare const userTotpIsActiveSchema: Joi.BooleanSchema;
export declare const userStatusSchema: Joi.NumberSchema;
export declare const userStatusKycSchema: Joi.NumberSchema;
export declare const userRoleSchema: Joi.StringSchema;
export declare const workerWagePerHourSchema: Joi.StringSchema;
export declare const userSocialMediaNicknamesSchema: Joi.ObjectSchema<any>;
export declare const userKnowledgeSchema: Joi.ObjectSchema<any>;
export declare const userWorkExperienceSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoWorkerSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoEmployerSchema: Joi.ObjectSchema<any>;
export declare const userCommonAdditionalInfoSchema: Joi.ObjectSchema<any>;
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const userMeSchema: Joi.ObjectSchema<any>;
export declare const userEmployerSchema: Joi.ObjectSchema<any>;
export declare const userWorkerSchema: Joi.ObjectSchema<any>;
export declare const userShortSchema: Joi.ObjectSchema<any>;
export declare const userShortWithAdditionalInfoSchema: Joi.ObjectSchema<any>;
export declare const userShortWithWalletSchema: Joi.ObjectSchema<any>;
export declare const userListSortSchema: Joi.ObjectSchema<any>;
export declare const betweenWagePerHourSchema: Joi.ObjectSchema<any>;
export declare const employerQuerySchema: Joi.ObjectSchema<any>;
export declare const workerQuerySchema: Joi.ObjectSchema<any>;
export declare const workerQueryForMapPointsSchema: Joi.ObjectSchema<any>;
export declare const usersSchema: Joi.ArraySchema;
export declare const userEmployersSchema: Joi.ArraySchema;
export declare const userWorkersSchema: Joi.ArraySchema;
export declare const usersShortSchema: Joi.ArraySchema;
export declare const usersShortWithAdditionalInfoSchema: Joi.ArraySchema;
export declare const tokensWithStatus: Joi.ObjectSchema<any>;
export declare const userSessionSchema: Joi.ObjectSchema<any>;
export declare const userSessionsSchema: Joi.ArraySchema;
export declare const userBlackListReasonSchema: Joi.StringSchema;
export declare const userBlackListStatusSchema: Joi.NumberSchema;
export declare const userBlackListSchema: Joi.ObjectSchema<any>;
