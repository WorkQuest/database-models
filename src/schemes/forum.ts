import * as Joi from "joi";
import {idSchema, isoDateSchema} from "./common";
import {mediasUrlOnlySchema} from "./media";

export const forumCommentTextSchema = Joi.string().example('New Comment').label('ForumCommentText');

export const forumCommentSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  forumPostId: idSchema,
  rootCommentId: idSchema,
  text: forumCommentTextSchema,
  createdAt: isoDateSchema,
}).label('ForumComment');

export const forumPostTitleSchema = Joi.string().example('New post').label('ForumPostTitle');
export const forumPostTextSchema = Joi.string().example('Hello World!').label('ForumPostText');

export const forumPostSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  title: forumPostTitleSchema,
  text: forumPostTextSchema,
  medias: mediasUrlOnlySchema,
  createdAt: isoDateSchema,
}).label('ForumPost');

export const forumPostsSchema = Joi.array().items(forumPostSchema).label('ForumPosts')
