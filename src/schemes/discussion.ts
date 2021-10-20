import * as Joi from "joi";
import {countSchema, idSchema, isoDateSchema} from "./common";
import {mediasUrlOnlySchema} from "./media";

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
export const discussionTextSchema = Joi.string().example('Hello World!').label('DiscussionText');

export const discussionSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  title: discussionTitleSchema,
  text: discussionTextSchema,
  amountLikes: countSchema,
  amountComments: countSchema,
  medias: mediasUrlOnlySchema,
  createdAt: isoDateSchema,
}).label('Discussion');

export const discussionsSchema = Joi.array().items(discussionSchema).label('Discussions');
export const discussionCommentsSchema = Joi.array().items(discussionCommentSchema).label('DiscussionComments');
