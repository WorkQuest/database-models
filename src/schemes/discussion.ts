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
  author: userShortSchema,
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
  author: userShortSchema,
  createdAt: isoDateSchema,
}).label('Discussion');

export const discussionsSchema = Joi.array().items(discussionSchema).label('Discussions');
export const discussionCommentsSchema = Joi.array().items(discussionCommentSchema).label('DiscussionComments');
