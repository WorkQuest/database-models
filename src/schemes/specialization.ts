import * as Joi from "joi";

export const industrySchema = Joi.string().pattern(/\d+/).example('1').label("Industry");
export const specializationSchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('Specialization');

export const industriesSchema = Joi.array().items(industrySchema).label('Industries');
export const specializationsSchema = Joi.array().items(specializationSchema).label('Specializations');

export const specializationFilerSchema = Joi.alternatives().try(
  industrySchema,
  specializationSchema,
).label('SpecializationFiler');

export const specializationsFilerSchema = Joi.array().items(specializationFilerSchema).label('SpecializationFiler');

