import * as Joi from "joi";
import {idSchema} from "./common";
import {userSchema, userShortSchema, usersSchema, usersShortSchema} from "./user";
import {mediaIdsSchema} from "./media";
import {ChatType, MessageType} from "../models";

const chatIdSchema = idSchema.label("ChatId");
const userIdSchema = idSchema.label("UserId");
const messageIdSchema = idSchema.label("MessageId");

export const chatTypeSchema = Joi.number().valid(...Object.keys(ChatType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(ChatType.private).label('ChatType');
export const chatNameSchema = Joi.string().label('ChatName');
export const messageTypeSchema = Joi.number().valid(...Object.keys(MessageType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(MessageType.common).label('MessageType');
export const messageTextSchema = Joi.string().label('MessageText');

export const messageSchema = Joi.object({
  id: messageIdSchema,
  senderUserId: userIdSchema,
  actionUserId: userIdSchema,
  chatId: chatIdSchema,
  type: messageTypeSchema,
  text: messageTextSchema,
  sender: userShortSchema,
  actionUser: userShortSchema,
  medias: mediaIdsSchema,
  // chat: chatSchema,
}).label('Message');

export const messagesSchema = Joi.array().items(messageSchema).label('Messages');
export const messageIdsSchema = Joi.array().items(messageIdSchema).label('MessageIds');

export const chatSchema = Joi.object({
  id: chatIdSchema,
  ownerUserId: userIdSchema,
  lastMessageId: messageIdSchema,
  name: chatNameSchema.allow(null),
  type: chatTypeSchema,
  owner: userShortSchema,
  lastMessage: messageSchema,
  members: usersShortSchema,
}).label('Chat');

export const chatsSchema = Joi.array().items(chatSchema).label('Chats');
export const chatIdsSchema = Joi.array().items(chatIdSchema).label('ChatIds');

