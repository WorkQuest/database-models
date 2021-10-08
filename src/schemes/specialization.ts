import * as Joi from "joi";

export const specializationSchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('Specialization');
export const specializationsSchema = Joi.array().items(specializationSchema).label('Specializations');

export const specializationFilerSchema = Joi.alternatives().try(
  Joi.string().pattern(/\d+.\d+/).example('1.501'),
  Joi.string().pattern(/\d+/).example('1'),
).label('SpecializationFiler');

export const specializationsFilerSchema = Joi.array().items(specializationFilerSchema).label('SpecializationFiler');

