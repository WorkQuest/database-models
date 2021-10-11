import * as Joi from "joi";

export const industryKeySchema = Joi.string().pattern(/\d+/).example('1').label("IndustryKey");
export const industryNameSchema = Joi.string().example('Programming').label('IndustryName');

export const specializationKeySchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('SpecializationKey');
export const specializationNameSchema = Joi.string().example('IT').label('SpecializationName');

export const industrySchema = Joi.object({
  key: industryKeySchema,
  industry: industryNameSchema,
}).label('Industry');

export const specializationSchema = Joi.object({
  key: specializationKeySchema,
  specialization: specializationNameSchema,
  industry: industrySchema,
}).label('Specialization');

export const specializationFilerSchema = Joi.alternatives().try(
  industryKeySchema,
  specializationKeySchema,
).label('SpecializationFiler');

export const industriesSchema = Joi.array().items(industrySchema).label('Industries');
export const specializationsSchema = Joi.array().items(specializationSchema).label('Specializations');
export const industryKeysSchema = Joi.array().items(industryKeySchema).label('IndustryKeys');
export const specializationKeysSchema = Joi.array().items(specializationKeySchema).label('SpecializationKeys');
export const specializationsFilerSchema = Joi.array().items(specializationFilerSchema).label('SpecializationFilers');

