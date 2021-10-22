import * as Joi from "joi";
import {countSchema, idSchema, isoDateSchema} from "./common";
import {mediasUrlOnlySchema} from "./media";
import {userShortSchema} from "./user";

export const discussionCommentTextSchema = Joi.string().example('New Comment').label('DiscussionCommentText');

export const discussionCommentSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  discussionId: idSchema,
  rootCommentId: idSchema,
  text: discussionCommentTextSchema,
  amountLikes: countSchema,
  amountSubComments: countSchema,
  medias: mediasUrlOnlySchema,
  createdAt: isoDateSchema,
}).label('DiscussionComment');

export const discussionTitleSchema = Joi.string().example('New post').label('DiscussionTitle');
export const discussionDescriptionSchema = Joi.string().example('Hello World!').label('DiscussionText');

export const discussionSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  title: discussionTitleSchema,
  description: discussionDescriptionSchema,
  amountLikes: countSchema,
  amountComments: countSchema,
  medias: mediasUrlOnlySchema,
  createdAt: isoDateSchema,
}).label('Discussion');

export const discussionsSchema = Joi.array().items(discussionSchema).label('Discussions');
export const discussionCommentsSchema = Joi.array().items(discussionCommentSchema).label('DiscussionComments');

export const discussionLikesSchema = Joi.object({
  id: idSchema,
  discussionId: idSchema,
  userId: idSchema,
  createdAt: isoDateSchema,
  user: userShortSchema
}).label('DiscussionLikes');

export const commentLikesSchema = Joi.object({
  id: idSchema,
  commentId: idSchema,
  userId: idSchema,
  createdAt: isoDateSchema,
  user: userShortSchema
}).label('CommentLikes');
