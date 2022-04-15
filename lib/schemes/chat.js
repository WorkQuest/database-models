"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatQuerySchema = exports.chatsForGetWithCountSchema = exports.chatsForGetSchema = exports.chatsSchema = exports.chatForGetSchema = exports.chatSchema = exports.chatNameSchema = exports.chatTypeSchema = exports.infoMessageSchema = exports.messageActionSchema = exports.chatMemberSchema = exports.chatMemberUnreadCountMessagesSchema = exports.messagesForGetWithCountSchema = exports.messagesWithCountSchema = exports.messagesSchema = exports.messagesForGetSchema = exports.messageForGetSchema = exports.messageSchema = exports.messageNumberSchema = exports.messageTextSchema = exports.messageSenderStatusSchema = exports.messageTypeSchema = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const user_1 = require("./user");
const models_1 = require("../models");
exports.messageTypeSchema = Joi.string().valid(...Object.values(models_1.MessageType)).example(models_1.MessageType.message).label("MessageType");
exports.messageSenderStatusSchema = Joi.string().valid(...Object.values(models_1.SenderMessageStatus)).example(models_1.SenderMessageStatus.unread).label("MessageSenderStatus");
exports.messageTextSchema = Joi.string().example("Hello world!").label('MessageText');
exports.messageNumberSchema = Joi.number().example(123).label('MessageNumber');
exports.messageSchema = Joi.object({
    id: common_1.idSchema,
    number: exports.messageNumberSchema,
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
exports.chatMemberUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');
exports.chatMemberSchema = Joi.object({
    id: common_1.idSchema,
    chatId: common_1.idSchema,
    userId: common_1.idSchema,
    lastReadMessageId: common_1.idSchema,
    unreadCountMessages: exports.chatMemberUnreadCountMessagesSchema,
    lastReadMessageNumber: exports.messageNumberSchema,
}).label('ChatMember');
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
    lastMessageDate: common_1.isoDateSchema,
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
    lastMessageDate: common_1.isoDateSchema,
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
exports.chatQuerySchema = Joi.object({
    starred: Joi.boolean().default(false),
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
    q: common_1.searchSchema,
    sort: Joi.object({
        lastMessageDate: common_1.sortDirectionSchema,
    }).default({ lastMessageDate: 'DESC' }).label('SortChats'),
}).label('ChatsQuery');
