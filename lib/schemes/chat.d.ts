import * as Joi from "joi";
export declare const messageTypeSchema: Joi.StringSchema;
export declare const messageSenderStatusSchema: Joi.StringSchema;
export declare const messageTextSchema: Joi.StringSchema;
export declare const messageNumberSchema: Joi.NumberSchema;
export declare const chatTypeSchema: Joi.StringSchema;
export declare const chatNameSchema: Joi.StringSchema;
export declare const unreadCountChatsSchema: Joi.NumberSchema;
export declare const chatDataSchema: Joi.ObjectSchema<any>;
export declare const chatMemberDataUnreadCountMessagesSchema: Joi.NumberSchema;
export declare const chatMemberTypeSchema: Joi.StringSchema;
export declare const chatMemberStatusSchema: Joi.StringSchema;
export declare const chatMemberDataSchema: Joi.ObjectSchema<any>;
export declare const chatMemberDeletionDataSchema: Joi.ObjectSchema<any>;
export declare const chatMemberSchema: Joi.ObjectSchema<any>;
export declare const messageSchema: Joi.ObjectSchema<any>;
export declare const messageForGetSchema: Joi.ObjectSchema<any>;
export declare const messagesForGetSchema: Joi.ArraySchema;
export declare const messagesSchema: Joi.ArraySchema;
export declare const messagesWithCountSchema: Joi.ObjectSchema<any>;
export declare const messagesForGetWithCountSchema: Joi.ObjectSchema<any>;
export declare const messageActionSchema: Joi.StringSchema;
export declare const infoMessageSchema: Joi.ObjectSchema<any>;
export declare const groupChatSchema: Joi.ObjectSchema<any>;
export declare const chatSchema: Joi.ObjectSchema<any>;
export declare const chatForGetSchema: Joi.ObjectSchema<any>;
export declare const chatsSchema: Joi.ArraySchema;
export declare const chatsForGetSchema: Joi.ArraySchema;
export declare const chatsForGetWithCountSchema: Joi.ObjectSchema<any>;
export declare const chatQuerySchema: Joi.ObjectSchema<any>;
export declare const chatStatisticSchema: Joi.ObjectSchema<any>;
