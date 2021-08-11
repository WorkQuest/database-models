import * as Joi from "joi";
import {idSchema} from "./common";
import {userSchema, usersSchema} from "./user";
import {mediaIdsSchema} from "./media";
import {ChatType} from "../models";

const chatIdSchema = idSchema.label("ChatId");
const userIdSchema = idSchema.label("UserId");
const messageIdSchema = idSchema.label("MessageId");

export const chatTypeSchema = Joi.number().valid(...Object.keys(ChatType).map(key => parseInt(key)).filter(key => !isNaN(key))).example(ChatType.private).label('ChatType');

export const messageTextSchema = Joi.string().label('MessageText');

export const messageSchema = Joi.object({
  id: messageIdSchema,
  senderUserId: userIdSchema,
  chatId: chatIdSchema,
  text: messageTextSchema,
  sender: userSchema,
  medias: mediaIdsSchema,
  // chat: chatSchema,
}).label('Message');

export const messagesSchema = Joi.array().items(messageSchema).label('Messages');
export const messageIdsSchema = Joi.array().items(messageIdSchema).label('MessageIds');

export const chatSchema = Joi.object({
  id: chatIdSchema,
  creatorUserId: userIdSchema,
  lastMessageId: messageIdSchema,
  type: chatTypeSchema,
  creator: userSchema,
  lastMessage: messageSchema,
  otherMember: userSchema,
  members: usersSchema,
  messages: messagesSchema,
}).label('Chat');

export const chatsSchema = Joi.array().items(chatSchema).label('Chats');
export const chatIdsSchema = Joi.array().items(chatIdSchema).label('ChatIds');

