"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatIdsSchema = exports.chatsSchema = exports.messageIdsSchema = exports.messagesSchema = exports.chatSchema = exports.messageSchema = exports.messageTextSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const media_1 = require("./media");
const chatIdSchema = common_1.idSchema.label("ChatId");
const userIdSchema = common_1.idSchema.label("UserId");
const messageIdSchema = common_1.idSchema.label("MessageId");
exports.messageTextSchema = Joi.string().label('MessageText');
exports.messageSchema = Joi.object({
    id: messageIdSchema,
    senderUserId: userIdSchema,
    chatId: chatIdSchema,
    text: exports.messageTextSchema,
    sender: user_1.userSchema,
    medias: media_1.mediaIdsSchema,
}).label('Message');
exports.chatSchema = Joi.object({
    id: chatIdSchema,
    creatorUserId: userIdSchema,
    creator: user_1.userSchema,
}).label('Chat');
exports.messagesSchema = Joi.array().items(exports.messageSchema).label('Messages');
exports.messageIdsSchema = Joi.array().items(messageIdSchema).label('MessageIds');
exports.chatsSchema = Joi.array().items(exports.chatSchema).label('Chats');
exports.chatIdsSchema = Joi.array().items(chatIdSchema).label('ChatIds');
