import * as Joi from "joi";
import {
  idSchema,
  idsSchema,
  starSchema,
  countSchema,
  limitSchema,
  offsetSchema,
  searchSchema,
  isoDateSchema,
  sortDirectionSchema,
} from "./common";
import {ChatType, MessageType, SenderMessageStatus, MessageAction, MemberRole} from "../models";
import {userShortSchema, userShortWithAdditionalInfoSchema} from "./user";
import {adminSchema} from "./admin";

/** Chat message */
export const messageTypeSchema = Joi.string().valid(...Object.values(MessageType)).example(MessageType.message).label("MessageType");
export const messageSenderStatusSchema = Joi.string().valid(...Object.values(SenderMessageStatus)).example(SenderMessageStatus.unread).label("MessageSenderStatus");
export const messageTextSchema = Joi.string().example("Hello world!").label('MessageText');
export const messageNumberSchema = Joi.number().example(123).label('MessageNumber');
export const chatMemberRoleSchema = Joi.string().valid(...Object.values(MemberRole)).example(MemberRole.User).label("ChatMemberRole");


/** Chat member */
export const chatMemberUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');

export const chatMemberSchema = Joi.object({
  id: idSchema,
  chatId: idSchema,
  memberId: idSchema,
  adminId: idSchema,
  role: chatMemberRoleSchema,
  lastReadMessageId: idSchema,
  unreadCountMessages: chatMemberUnreadCountMessagesSchema,
  lastReadMessageNumber: messageNumberSchema,
  user: userShortWithAdditionalInfoSchema,
  admin: adminSchema,

}).label('ChatMember');

/** Message */
export const messageSchema = Joi.object({
  id: idSchema,
  number: messageNumberSchema,
  senderMemberId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  type: messageTypeSchema,
  senderStatus: messageSenderStatusSchema,
  sender: chatMemberSchema,
  medias: idsSchema,
  // chat: chatSchema,
}).label('Message');

export const messageForGetSchema = Joi.object({
  id: idSchema,
  senderMemberId: idSchema,
  chatId: idSchema,
  text: messageTextSchema,
  sender: chatMemberSchema,
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
  memberId: idSchema,
  messageAction: messageActionSchema,
  message: messageSchema,
}).label('InfoMessageSchema');

/** Chat */
export const chatTypeSchema = Joi.string().valid(...Object.values(ChatType)).example(ChatType.private).label("ChatType");
export const chatNameSchema = Joi.string().example('Chat name').label('ChatName');

export const chatSchema = Joi.object({
  id: idSchema,
  ownerMemberId: idSchema,
  lastMessageId: idSchema,
  lastMessageDate: isoDateSchema,
  name: chatNameSchema.allow(null),
  type: chatTypeSchema,
  owner: chatMemberSchema,
  lastMessage: messageSchema,
}).label('Chat');

export const chatForGetSchema = Joi.object({
  id: idSchema,
  ownerMemberId: idSchema,
  lastMessageId: idSchema,
  lastMessageDate: isoDateSchema,
  name: chatNameSchema.allow(null),
  type: chatTypeSchema,
  owner: chatMemberSchema,
  lastMessage: messageSchema,
  meMember: chatMemberSchema,
  members: chatMemberSchema,
  star: starSchema,
}).label('ChatForGet');

export const chatsSchema = Joi.array().items(chatSchema).label('Chats');
export const chatsForGetSchema = Joi.array().items(chatForGetSchema).label('ChatForGet');

export const chatsForGetWithCountSchema = Joi.object({
  count: countSchema,
  chats: chatsForGetSchema,
});

export const chatQuerySchema = Joi.object({
  starred: Joi.boolean().default(false),
  offset: offsetSchema,
  limit: limitSchema,
  q: searchSchema,
  sort: Joi.object({
    lastMessageDate: sortDirectionSchema,
  }).default({ lastMessageDate: 'DESC' }).label('SortChats'),
}).label('ChatsQuery');
