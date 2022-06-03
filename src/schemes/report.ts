import * as Joi from "joi";
import { ReportEntityType } from "../models";
import { idSchema, isoDateSchema } from "./common";
import { mediasUrlOnlySchema } from "./media";
import { userShortSchema } from "./user";
import { adminSchema } from "./admin";
import { questSchema } from "./quest";
import { discussionCommentSchema } from "./discussion";

export const reportTitleSchema = Joi.string().max(255).example('Breaking the rules...').label('ReportTitle');
export const reportDescriptionSchema = Joi.string().min(50).max(1000).example('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').label('ReportDescription');
export const reportStatusSchema = Joi.number().valid(-1, 0, 1).example(0).label('ReportStatus');
export const reportEntityTypeSchema = Joi.string().valid(...Object.values(ReportEntityType)).example(ReportEntityType.User).label('ReportEntityType');

export const reportSchema = Joi.object({
  id: idSchema,
  authorId: idSchema,
  resolvedByAdminId: idSchema,
  title: reportTitleSchema,
  description: reportDescriptionSchema,
  status: reportStatusSchema,
  entityType: reportEntityTypeSchema,
  entityId: idSchema,
  resolvedAt: isoDateSchema,
  medias: mediasUrlOnlySchema,
  user: userShortSchema,
  admin: adminSchema,
}).label('Report');

export const reportWithEntitiesSchema = reportSchema.keys({
  entityUser: userShortSchema,
  entityQuest: questSchema,
  entityComment: discussionCommentSchema
}).label('ReportWithEntities')
