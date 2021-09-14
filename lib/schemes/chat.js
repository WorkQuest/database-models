"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatsSchema = exports.chatSchema = exports.messagesSchema = exports.messageSchema = exports.messageTextSchema = exports.messageTypeSchema = exports.chatNameSchema = exports.chatTypeSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const models_1 = require("../models");
exports.chatTypeSchema = Joi.number().valid(...Object.keys(models_1.ChatType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.ChatType.private).label('ChatType');
exports.chatNameSchema = Joi.string().label('ChatName');
exports.messageTypeSchema = Joi.number().valid(...Object.keys(models_1.MessageType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.MessageType.message).label('MessageType');
exports.messageTextSchema = Joi.string().label('MessageText');
exports.starredMessageScheme = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    messageId: common_1.idSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('StarredMessageScheme');
exports.messageSchema = Joi.object({
    id: common_1.idSchema,
    senderUserId: common_1.idSchema,
    chatId: common_1.idSchema,
    text: exports.messageTextSchema,
    sender: user_1.userShortSchema,
    medias: common_1.idsSchema,
    starredMessage: exports.starredMessageScheme,
}).label('Message');
exports.messagesSchema = Joi.array().items(exports.messageSchema).label('Messages');
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
exports.chatsSchema = Joi.array().items(exports.chatSchema).label('Chats');
