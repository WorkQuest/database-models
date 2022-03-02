"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const user_1 = require("./user");
const admin_1 = require("./admin");
exports.messageTypeSchema = Joi.string().valid(...Object.values(models_1.MessageType)).example(models_1.MessageType.message).label("MessageType");
exports.messageSenderStatusSchema = Joi.string().valid(...Object.values(models_1.SenderMessageStatus)).example(models_1.SenderMessageStatus.unread).label("MessageSenderStatus");
exports.messageTextSchema = Joi.string().example("Hello world!").label('MessageText');
exports.messageNumberSchema = Joi.number().example(123).label('MessageNumber');
exports.chatMemberTypeSchema = Joi.string().valid(...Object.values(models_1.MemberType)).example(models_1.MemberType.User).label("ChatMemberRole");
exports.chatMemberUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');
exports.chatMemberSchema = Joi.object({
    id: common_1.idSchema,
    chatId: common_1.idSchema,
    memberId: common_1.idSchema,
    adminId: common_1.idSchema,
    type: exports.chatMemberTypeSchema,
    lastReadMessageId: common_1.idSchema,
    unreadCountMessages: exports.chatMemberUnreadCountMessagesSchema,
    lastReadMessageNumber: exports.messageNumberSchema,
    user: user_1.userShortWithAdditionalInfoSchema,
    admin: admin_1.adminSchema,
}).label('ChatMember');
exports.messageSchema = Joi.object({
    id: common_1.idSchema,
    number: exports.messageNumberSchema,
    senderMemberId: common_1.idSchema,
    chatId: common_1.idSchema,
    text: exports.messageTextSchema,
    type: exports.messageTypeSchema,
    senderStatus: exports.messageSenderStatusSchema,
    sender: exports.chatMemberSchema,
    medias: common_1.idsSchema,
}).label('Message');
exports.messageForGetSchema = Joi.object({
    id: common_1.idSchema,
    senderMemberId: common_1.idSchema,
    chatId: common_1.idSchema,
    text: exports.messageTextSchema,
    sender: exports.chatMemberSchema,
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
    memberId: common_1.idSchema,
    messageAction: exports.messageActionSchema,
    message: exports.messageSchema,
}).label('InfoMessageSchema');
exports.chatTypeSchema = Joi.string().valid(...Object.values(models_1.ChatType)).example(models_1.ChatType.private).label("ChatType");
exports.chatNameSchema = Joi.string().example('Chat name').label('ChatName');
exports.chatSchema = Joi.object({
    id: common_1.idSchema,
    ownerMemberId: common_1.idSchema,
    lastMessageId: common_1.idSchema,
    lastMessageDate: common_1.isoDateSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    owner: exports.chatMemberSchema,
    lastMessage: exports.messageSchema,
}).label('Chat');
exports.chatForGetSchema = Joi.object({
    id: common_1.idSchema,
    ownerMemberId: common_1.idSchema,
    lastMessageId: common_1.idSchema,
    lastMessageDate: common_1.isoDateSchema,
    name: exports.chatNameSchema.allow(null),
    type: exports.chatTypeSchema,
    owner: exports.chatMemberSchema,
    lastMessage: exports.messageSchema,
    meMember: exports.chatMemberSchema,
    members: exports.chatMemberSchema,
    star: common_1.starSchema,
}).label('ChatForGet');
exports.chatsSchema = Joi.array().items(exports.chatSchema).label('Chats');
exports.chatsForGetSchema = Joi.array().items(exports.chatForGetSchema).label('ChatForGet');
exports.chatsForGetWithCountSchema = Joi.object({
    count: common_1.countSchema,
    chats: exports.chatsForGetSchema,
});
exports.chatQuerySchema = Joi.object({
    starred: Joi.boolean().default(false),
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
    q: common_1.searchSchema,
    sort: Joi.object({
        lastMessageDate: common_1.sortDirectionSchema,
    }).default({ lastMessageDate: 'DESC' }).label('SortChats'),
}).label('ChatsQuery');
