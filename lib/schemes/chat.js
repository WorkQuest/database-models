"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatsForGetWithCountSchema = exports.chatsForGetSchema = exports.chatsSchema = exports.chatForGetSchema = exports.chatSchema = exports.messagesForGetWithCountSchema = exports.messagesWithCountSchema = exports.messagesSchema = exports.messagesForGetSchema = exports.messageForGetSchema = exports.messageSchema = exports.messageTextSchema = exports.messageSenderStatusSchema = exports.messageTypeSchema = exports.chatNameSchema = exports.chatTypeSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const models_1 = require("../models");
exports.chatTypeSchema = Joi.string().valid(...Object.values(models_1.ChatType)).example(models_1.ChatType.private).label("MessageType");
exports.chatNameSchema = Joi.string().example('Chat name').label('ChatName');
exports.messageTypeSchema = Joi.string().valid(...Object.values(models_1.MessageType)).example(models_1.MessageType.message).label("MessageType");
exports.messageSenderStatusSchema = Joi.string().valid(...Object.values(models_1.SenderMessageStatus)).example(models_1.SenderMessageStatus.unread).label("MessageSenderStatus");
exports.messageTextSchema = Joi.string().example("Hello world!").label('MessageText');
exports.messageSchema = Joi.object({
    id: common_1.idSchema,
    senderUserId: common_1.idSchema,
    chatId: common_1.idSchema,
    text: exports.messageTextSchema,
    type: exports.messageTypeSchema,
    senderStatus: exports.messageSenderStatusSchema,
    sender: user_1.userShortSchema,
    medias: common_1.idsSchema,
}).label('Message');
exports.messageForGetSchema = Joi.object({
    id: common_1.idSchema,
    senderUserId: common_1.idSchema,
    chatId: common_1.idSchema,
    text: exports.messageTextSchema,
    sender: user_1.userShortSchema,
    medias: common_1.idsSchema,
    star: common_1.starSchema,
}).label('MessageForGet');
exports.messagesForGetSchema = Joi.array().items(exports.messageForGetSchema).label('MessagesForGet');
exports.messagesSchema = Joi.array().items(exports.messageSchema).label('Messages');
exports.messagesWithCountSchema = Joi.object({
    count: common_1.countSchema,
    messages: exports.messagesSchema,
});
exports.messagesForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    messages: exports.messagesForGetSchema,
}).label("MessagesWithCount");
exports.chatSchema = Joi.object({
    id: common_1.idSchema,
    ownerUserId: common_1.idSchema,
    lastMessageId: common_1.idSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    owner: user_1.userShortSchema,
    lastMessage: exports.messageSchema,
    members: user_1.usersShortSchema,
}).label('Chat');
exports.chatForGetSchema = Joi.object({
    id: common_1.idSchema,
    ownerUserId: common_1.idSchema,
    lastMessageId: common_1.idSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    owner: user_1.userShortSchema,
    lastMessage: exports.messageSchema,
    members: user_1.usersShortSchema,
    star: common_1.starSchema,
}).label('ChatForGet');
exports.chatsSchema = Joi.array().items(exports.chatSchema).label('Chats');
exports.chatsForGetSchema = Joi.array().items(exports.chatForGetSchema).label('ChatForGet');
exports.chatsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    chats: exports.chatsForGetSchema,
});
