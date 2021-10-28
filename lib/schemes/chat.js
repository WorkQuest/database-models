"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatsForGetWithCountSchema = exports.chatsForGetSchema = exports.chatsSchema = exports.chatForGetSchema = exports.chatSchema = exports.chatNameSchema = exports.chatTypeSchema = exports.infoMessageSchema = exports.messageActionSchema = exports.messagesForGetWithCountSchema = exports.messagesWithCountSchema = exports.messagesSchema = exports.messagesForGetSchema = exports.messageForGetSchema = exports.messageSchema = exports.messageTextSchema = exports.messageSenderStatusSchema = exports.messageTypeSchema = exports.chatMemberSchema = exports.chatMemberUnreadCountMessagesSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const models_1 = require("../models");
exports.chatMemberUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');
exports.chatMemberSchema = Joi.object({
    id: common_1.idSchema,
    chatId: common_1.idSchema,
    userId: common_1.idSchema,
    lastReadMessageId: common_1.idSchema,
    unreadCountMessages: exports.chatMemberUnreadCountMessagesSchema,
    lastReadMessageDate: common_1.isoDateSchema,
}).label('ChatMember');
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
    sender: user_1.userShortWithAdditionalInfoSchema,
    medias: common_1.idsSchema,
}).label('Message');
exports.messageForGetSchema = Joi.object({
    id: common_1.idSchema,
    senderUserId: common_1.idSchema,
    chatId: common_1.idSchema,
    text: exports.messageTextSchema,
    sender: user_1.userShortWithAdditionalInfoSchema,
    medias: common_1.idsSchema,
    star: common_1.starSchema,
}).label('MessageForGet');
exports.messagesForGetSchema = Joi.array().items(exports.messageForGetSchema).label('MessagesForGet');
exports.messagesSchema = Joi.array().items(exports.messageSchema).label('Messages');
exports.messagesWithCountSchema = Joi.object({
    count: common_1.countSchema,
    messages: exports.messagesSchema,
}).label('MessagesWithCount');
exports.messagesForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    messages: exports.messagesForGetSchema,
}).label("MessagesWithCount");
exports.messageActionSchema = Joi.string().valid(...Object.values(models_1.MessageAction)).example(models_1.MessageAction.groupChatAddUser).label("MessageAction");
exports.infoMessageSchema = Joi.object({
    id: common_1.idSchema,
    messageId: common_1.idSchema,
    userId: common_1.idSchema,
    messageAction: exports.messageActionSchema,
    message: exports.messageSchema,
}).label('InfoMessageSchema');
exports.chatTypeSchema = Joi.string().valid(...Object.values(models_1.ChatType)).example(models_1.ChatType.private).label("ChatType");
exports.chatNameSchema = Joi.string().example('Chat name').label('ChatName');
exports.chatSchema = Joi.object({
    id: common_1.idSchema,
    ownerUserId: common_1.idSchema,
    lastMessageId: common_1.idSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    owner: user_1.userShortWithAdditionalInfoSchema,
    lastMessage: exports.messageSchema,
    userMembers: user_1.userShortWithAdditionalInfoSchema,
}).label('Chat');
exports.chatForGetSchema = Joi.object({
    id: common_1.idSchema,
    ownerUserId: common_1.idSchema,
    lastMessageId: common_1.idSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    owner: user_1.userShortWithAdditionalInfoSchema,
    lastMessage: exports.messageSchema,
    meMember: exports.chatMemberSchema,
    userMembers: user_1.userShortWithAdditionalInfoSchema,
    star: common_1.starSchema,
}).label('ChatForGet');
exports.chatsSchema = Joi.array().items(exports.chatSchema).label('Chats');
exports.chatsForGetSchema = Joi.array().items(exports.chatForGetSchema).label('ChatForGet');
exports.chatsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    chats: exports.chatsForGetSchema,
});
