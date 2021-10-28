import * as Joi from "joi";
import {countSchema, idSchema, idsSchema, isoDateSchema, starSchema} from "./common";
import {userShortWithAdditionalInfoSchema, usersShortSchema} from "./user";
import {ChatType, MessageType, SenderMessageStatus, MessageAction} from "../models";

/** Chat member */
export const chatMemberUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');

export const chatMemberSchema = Joi.object({
  id: idSchema,
  chatId: idSchema,
  userId: idSchema,
  lastReadMessageId: idSchema,
  unreadCountMessages: chatMemberUnreadCountMessagesSchema,
  lastReadMessageDate: isoDateSchema,
}).label('ChatMember');

/** Chat message */
export const messageTypeSchema = Joi.string().valid(...Object.values(MessageType)).example(MessageType.message).label("MessageType");
export const messageSenderStatusSchema = Joi.string().valid(...Object.values(SenderMessageStatus)).example(SenderMessageStatus.unread).label("MessageSenderStatus");
export const messageTextSchema = Joi.string().example("Hello world!").label('MessageText');

export const messageSchema = Joi.object({
  id: idSchema,
  senderUserId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  type: messageTypeSchema,
  senderStatus: messageSenderStatusSchema,
  sender: userShortWithAdditionalInfoSchema,
  medias: idsSchema,
  // chat: chatSchema,
}).label('Message');

export const messageForGetSchema = Joi.object({
  id: idSchema,
  senderUserId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  sender: userShortWithAdditionalInfoSchema,
  medias: idsSchema,
  star: starSchema,
}).label('MessageForGet');

export const messagesForGetSchema = Joi.array().items(messageForGetSchema).label('MessagesForGet');
export const messagesSchema = Joi.array().items(messageSchema).label('Messages');

export const messagesWithCountSchema = Joi.object({
  count: countSchema,
  messages: messagesSchema,
}).label('MessagesWithCount');

export const messagesForGetWithCountSchema = Joi.object({
  count: countSchema,
  messages: messagesForGetSchema,
}).label("MessagesWithCount");

/** Info message */
export const messageActionSchema = Joi.string().valid(...Object.values(MessageAction)).example(MessageAction.groupChatAddUser).label("MessageAction");

export const infoMessageSchema = Joi.object({
  id: idSchema,
  messageId: idSchema,
  userId: idSchema,
  messageAction: messageActionSchema,
  message: messageSchema,
}).label('InfoMessageSchema');

/** Chat */
export const chatTypeSchema = Joi.string().valid(...Object.values(ChatType)).example(ChatType.private).label("ChatType");
export const chatNameSchema = Joi.string().example('Chat name').label('ChatName');

export const chatSchema = Joi.object({
  id: idSchema,
  ownerUserId: idSchema,
  lastMessageId: idSchema,
  name: chatNameSchema.allow(null),
  type: chatTypeSchema,
  owner: userShortWithAdditionalInfoSchema,
  lastMessage: messageSchema,
  userMembers: userShortWithAdditionalInfoSchema,
}).label('Chat');

export const chatForGetSchema = Joi.object({
  id: idSchema,
  ownerUserId: idSchema,
  lastMessageId: idSchema,
  name: chatNameSchema.allow(null),
  type: chatTypeSchema,
  owner: userShortWithAdditionalInfoSchema,
  lastMessage: messageSchema,
  meMember: chatMemberSchema,
  userMembers: userShortWithAdditionalInfoSchema,
  star: starSchema,
}).label('ChatForGet');

export const chatsSchema = Joi.array().items(chatSchema).label('Chats');
export const chatsForGetSchema = Joi.array().items(chatForGetSchema).label('ChatForGet');

export const chatsForGetWithCountSchema = Joi.object({
  count: countSchema,
  chats: chatsForGetSchema,
});
