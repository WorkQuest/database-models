import Joi = require("joi");
import {idSchema, isoDateSchema, limitSchema, offsetSchema} from "./common";
import {AdminRole, AdminActionMethod} from "../models";
import {ratingStatisticAverageMarkSchema, ratingStatisticReviewCountSchema} from "./statistics";

export const adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('AdminFirstName');
export const adminLastNameSchema = Joi.string().max(255).example('Durov').label('AdminLastName');
export const adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('AdminEmail');
export const adminPasswordSchema = Joi.string().min(8).max(255).label('AdminPassword'); // TODO: describe custom validator rule
export const adminRoleSchema = Joi.string().valid(...Object.values(AdminRole)).default(AdminRole.main).example('main').label('AdminRole');
export const isActiveSchema = Joi.boolean().example(true).label('AdminIsActive');
export const adminActionMethodSchema = Joi.string().valid(...Object.values(AdminActionMethod)).example(AdminActionMethod.Post).label('AdminActionMethod');
export const adminActionPathSchema = Joi.string().example('/v1/admin/change/name').label('AdminActionRoute');
export const resolvedQuestDisputesSchema = Joi.number().example(5).label('ResolvedDisputes');

export const adminSchema = Joi.object({
  id: idSchema,
  email: adminEmailSchema,
  firstName: adminFirstNameSchema,
  lastName: adminLastNameSchema,
  isActive: isActiveSchema,
  adminRole: adminRoleSchema,
}).label('Admin');

export const adminRatingStatisticSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  reviewCount: ratingStatisticReviewCountSchema,
  averageMark: ratingStatisticAverageMarkSchema,
  admin: adminSchema,
}).label('AdminRatingStatistic');

export const adminWithSecretSchema = Joi.object({
  admin: adminSchema,
  secret: Joi.string().max(255).example('HJRT4QCSGNHGSYLF'),
}).label('RegisterAdminWithSecretSchema');

export const adminActionSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  method: adminActionMethodSchema,
  path: adminActionPathSchema,
}).label('AdminAction');

export const adminQuestDisputesStatisticSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  resolvedDisputes: resolvedQuestDisputesSchema,
  averageResolutionTime: isoDateSchema, //TODO: change this field schema
  admin: adminSchema,
}).label('AdminQuestDisputesStatistic');

