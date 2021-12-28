import * as Joi from "joi";
import {countSchema, idSchema, isoDateSchema, likeSchema, starSchema} from "./common";
import {mediasUrlOnlySchema} from "./media";
import {userShortSchema} from "./user";

export const discussionCommentTextSchema = Joi.string().example('New Comment').label('DiscussionCommentText');
export const discussionCommentLevel = Joi.number().example(0).label('DiscussionCommentLevel');

export const discussionCommentSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  discussionId: idSchema,
  rootCommentId: idSchema,
  text: discussionCommentTextSchema,
  amountLikes: countSchema,
  amountSubComments: countSchema,
  level: discussionCommentLevel,
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

export const discussionForGetSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  title: discussionTitleSchema,
  description: discussionDescriptionSchema,
  amountLikes: countSchema,
  amountComments: countSchema,
  createdAt: isoDateSchema,
  /**  */
  author: userShortSchema,
  medias: mediasUrlOnlySchema,
  star: starSchema, /** if this user set star on this discussion */
  liked: likeSchema, /** if this user put like on this discussion */
});

export const discussionsSchema = Joi.array().items(discussionSchema).label('Discussions');
export const discussionsForGetSchema = Joi.array().items(discussionForGetSchema).label('DiscussionsForGet');
export const discussionCommentsSchema = Joi.array().items(discussionCommentSchema).label('DiscussionComments');
