import * as Joi from "joi";
export declare const userEmailSchema: Joi.StringSchema;
export declare const userPasswordSchema: Joi.StringSchema;
export declare const userFirstNameSchema: Joi.StringSchema;
export declare const userLastNameSchema: Joi.StringSchema;
export declare const userStatusSchema: Joi.NumberSchema;
export declare const userRoleSchema: Joi.StringSchema;
export declare const userPhoneSchema: Joi.StringSchema;
export declare const userTempPhoneSchema: Joi.StringSchema;
export declare const userLocationSchema: Joi.ObjectSchema<any>;
export declare const userSocialMediaNicknamesSchema: Joi.ObjectSchema<any>;
export declare const userKnowledgeSchema: Joi.ObjectSchema<any>;
export declare const userWorkExperienceSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoWorkerSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoEmployerSchema: Joi.ObjectSchema<any>;
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const userShortSchema: Joi.ObjectSchema<any>;
export declare const usersSchema: Joi.ArraySchema;
export declare const usersShortSchema: Joi.ArraySchema;
export declare const tokensWithStatus: Joi.ObjectSchema<any>;
