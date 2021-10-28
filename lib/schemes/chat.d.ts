import * as Joi from "joi";
export declare const chatMemberUnreadCountMessagesSchema: Joi.NumberSchema;
export declare const chatMemberSchema: Joi.ObjectSchema<any>;
export declare const messageTypeSchema: Joi.StringSchema;
export declare const messageSenderStatusSchema: Joi.StringSchema;
export declare const messageTextSchema: Joi.StringSchema;
export declare const messageSchema: Joi.ObjectSchema<any>;
export declare const messageForGetSchema: Joi.ObjectSchema<any>;
export declare const messagesForGetSchema: Joi.ArraySchema;
export declare const messagesSchema: Joi.ArraySchema;
export declare const messagesWithCountSchema: Joi.ObjectSchema<any>;
export declare const messagesForGetWithCountSchema: Joi.ObjectSchema<any>;
export declare const messageActionSchema: Joi.StringSchema;
export declare const infoMessageSchema: Joi.ObjectSchema<any>;
export declare const chatTypeSchema: Joi.StringSchema;
export declare const chatNameSchema: Joi.StringSchema;
export declare const chatSchema: Joi.ObjectSchema<any>;
export declare const chatForGetSchema: Joi.ObjectSchema<any>;
export declare const chatsSchema: Joi.ArraySchema;
export declare const chatsForGetSchema: Joi.ArraySchema;
export declare const chatsForGetWithCountSchema: Joi.ObjectSchema<any>;
