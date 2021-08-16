import * as Joi from "joi";
export declare const userEmailSchema: Joi.StringSchema;
export declare const userPasswordSchema: Joi.StringSchema;
export declare const userFirstNameSchema: Joi.StringSchema;
export declare const userLastNameSchema: Joi.StringSchema;
export declare const userStatusSchema: Joi.NumberSchema;
export declare const userRoleSchema: Joi.StringSchema;
export declare const userPhoneSchema: Joi.StringSchema;
export declare const userTempPhoneSchema: Joi.StringSchema;
export declare const userCountrySchema: Joi.StringSchema;
export declare const userCitySchema: Joi.StringSchema;
export declare const userIpAddressSchema: Joi.StringSchema;
export declare const userStatusKYCSchema: Joi.NumberSchema;
export declare const userDeviceSchema: Joi.StringSchema;
export declare const userConfirmCodeSchema: Joi.StringSchema;
export declare const userSecretSchema: Joi.StringSchema;
export declare const userTOTPActiveSchema: Joi.BooleanSchema;
export declare const userTOTPSchema: Joi.ObjectSchema<any>;
export declare const userSecuritySchema: Joi.ObjectSchema<any>;
export declare const userSocialInfoSchema: Joi.ObjectSchema<any>;
export declare const userSocialSchema: Joi.ObjectSchema<any>;
export declare const userSettingsSchema: Joi.ObjectSchema<any>;
export declare const userPlaceSchema: Joi.ObjectSchema<any>;
export declare const userLastSessionSchema: Joi.ObjectSchema<any>;
export declare const userSocialMediaNicknamesSchema: Joi.ObjectSchema<any>;
export declare const userKnowledgeSchema: Joi.ObjectSchema<any>;
export declare const userWorkExperienceSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoWorkerSchema: Joi.ObjectSchema<any>;
export declare const userAdditionalInfoEmployerSchema: Joi.ObjectSchema<any>;
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const userFullSchema: Joi.ObjectSchema<any>;
export declare const userWithSettingsFullSchema: Joi.ObjectSchema<any>;
export declare const usersSchema: Joi.ArraySchema;
export declare const tokensWithStatus: Joi.ObjectSchema<any>;
export declare const usersQuerySchema: Joi.ObjectSchema<any>;
