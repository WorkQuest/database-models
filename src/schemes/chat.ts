import * as Joi from "joi";
import {countSchema, idSchema, idsSchema, starSchema} from "./common";
import {userShortSchema, usersShortSchema} from "./user";
import {ChatType, MessageType, SenderMessageStatus} from "../models";

export const chatTypeSchema = Joi.number().valid(...Object.keys(ChatType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(ChatType.private).label('ChatType');
export const chatNameSchema = Joi.string().label('ChatName');

export const messageTypeSchema = Joi.string().valid(...Object.values(MessageType)).example(MessageType.message).label("MessageType");
export const messageSenderStatusSchema = Joi.string().valid(...Object.values(SenderMessageStatus)).example(SenderMessageStatus.unread).label("MessageSenderStatus");
export const messageTextSchema = Joi.string().label('MessageText');

export const messageSchema = Joi.object({
  id: idSchema,
  senderUserId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  type: messageTypeSchema,
  senderStatus: messageSenderStatusSchema,
  sender: userShortSchema,
  medias: idsSchema,
  // chat: chatSchema,
}).label('Message');

export const messageForGetSchema = Joi.object({
  id: idSchema,
  senderUserId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  sender: userShortSchema,
  medias: idsSchema,
  star: starSchema,
}).label('MessageForGet');

export const messagesForGetSchema = Joi.array().items(messageForGetSchema).label('MessagesForGet');
export const messagesSchema = Joi.array().items(messageSchema).label('Messages');

export const messagesWithCountSchema = Joi.object({
  count: countSchema,
  messages: messagesSchema,
});

export const messagesForGetWithCountSchema = Joi.object({
  count: countSchema,
  messages: messagesForGetSchema,
}).label("MessagesWithCount");

export const chatSchema = Joi.object({
  id: idSchema,
  ownerUserId: idSchema,
  lastMessageId: idSchema,
  name: chatNameSchema.allow(null),
  type: chatTypeSchema,
  owner: userShortSchema,
  lastMessage: messageSchema,
  members: usersShortSchema,
}).label('Chat');

export const chatsSchema = Joi.array().items(chatSchema).label('Chats');

