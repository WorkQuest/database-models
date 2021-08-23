"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const media_1 = require("./media");
const models_1 = require("../models");
const chatIdSchema = common_1.idSchema.label("ChatId");
const userIdSchema = common_1.idSchema.label("UserId");
const messageIdSchema = common_1.idSchema.label("MessageId");
exports.chatTypeSchema = Joi.number().valid(...Object.keys(models_1.ChatType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.ChatType.private).label('ChatType');
exports.chatNameSchema = Joi.string().label('ChatName');
exports.messageTextSchema = Joi.string().label('MessageText');
exports.messageSchema = Joi.object({
    id: messageIdSchema,
    senderUserId: userIdSchema,
    chatId: chatIdSchema,
    text: exports.messageTextSchema,
    sender: user_1.userSchema,
    medias: media_1.mediaIdsSchema,
}).label('Message');
exports.messagesSchema = Joi.array().items(exports.messageSchema).label('Messages');
exports.messageIdsSchema = Joi.array().items(messageIdSchema).label('MessageIds');
exports.chatSchema = Joi.object({
    id: chatIdSchema,
    creatorUserId: userIdSchema,
    lastMessageId: messageIdSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    creator: user_1.userSchema,
    lastMessage: exports.messageSchema,
    otherMember: user_1.userSchema,
    members: user_1.usersSchema,
    messages: exports.messagesSchema,
}).label('Chat');
exports.chatsSchema = Joi.array().items(exports.chatSchema).label('Chats');
exports.chatIdsSchema = Joi.array().items(chatIdSchema).label('ChatIds');
