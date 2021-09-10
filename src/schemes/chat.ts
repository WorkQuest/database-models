import * as Joi from "joi";
import {idSchema, idsSchema, isoDateSchema} from "./common";
import {userShortSchema, usersShortSchema} from "./user";
import {ChatType} from "../models";

export const chatTypeSchema = Joi.number().valid(...Object.keys(ChatType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(ChatType.private).label('ChatType');
export const chatNameSchema = Joi.string().label('ChatName');
export const messageTextSchema = Joi.string().label('MessageText');

export const messageSchema = Joi.object({
  id: idSchema,
  senderUserId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  sender: userShortSchema,
  medias: idsSchema,
  // chat: chatSchema,
}).label('Message');

export const messagesSchema = Joi.array().items(messageSchema).label('Messages');
export const starredChatSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  chatId: idSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('StarredChatScheme');

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

