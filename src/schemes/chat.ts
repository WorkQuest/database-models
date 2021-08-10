import * as Joi from "joi";
import {idSchema} from "./common";
import {userSchema} from "./user";
import {mediaIdsSchema} from "./media";

const chatIdSchema = idSchema.label("ChatId");
const userIdSchema = idSchema.label("UserId");
const messageIdSchema = idSchema.label("MessageId");

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

export const chatSchema = Joi.object({
  id: chatIdSchema,
  creatorUserId: userIdSchema,
  creator: userSchema,
}).label('Chat');

export const messagesSchema = Joi.array().items(messageSchema).label('Messages');
export const messageIdsSchema = Joi.array().items(messageIdSchema).label('MessageIds');

export const chatsSchema = Joi.array().items(chatSchema).label('Chats');
export const chatIdsSchema = Joi.array().items(chatIdSchema).label('ChatIds');

