import Joi = require("joi");
export declare const adminFirstNameSchema: Joi.StringSchema;
export declare const adminLastNameSchema: Joi.StringSchema;
export declare const adminEmailSchema: Joi.StringSchema;
export declare const adminPasswordSchema: Joi.StringSchema;
export declare const adminRoleSchema: Joi.StringSchema;
export declare const isActiveSchema: Joi.BooleanSchema;
export declare const adminActionRouteSchema: Joi.StringSchema;
export declare const adminSchema: Joi.ObjectSchema<any>;
export declare const adminWithSecretSchema: Joi.ObjectSchema<any>;
export declare const adminActionSchema: Joi.ObjectSchema<any>;
