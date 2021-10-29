import * as Joi from "joi";

export const industryKeySchema = Joi.string().pattern(/\d+/).example('1').label("IndustryKey");
export const industryNameSchema = Joi.string().example('Programming').label('IndustryName');

export const specializationKeySchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('SpecializationKey');
export const specializationNameSchema = Joi.string().example('IT').label('SpecializationName');

export const modelSpecializationSchema = Joi.object({
  path: specializationKeySchema,
}).label("ModelSpecialization"); // TODO to array [1.100, 1.1001]

export const specializationFilerSchema = Joi.alternatives().try(
  industryKeySchema,
  specializationKeySchema,
).label('SpecializationFiler');

export const industryKeysSchema = Joi.array().items(industryKeySchema).label('IndustryKeys');
export const specializationKeysSchema = Joi.array().items(specializationKeySchema).label('SpecializationKeys');
export const specializationsFilerSchema = Joi.array().items(specializationFilerSchema).label('SpecializationFilers');
export const modelSpecializationsSchema =  Joi.array().items(modelSpecializationSchema).label('ModelSpecializations');

export const specialisationsSchema = Joi.object({
  specializationName: specializationKeySchema,
}).label('Filter');

export const industryWithSpecialisationSchema = Joi.object({
  key: industryKeySchema,
  specialisationsSchema
}).label('IndustryWithSpecialisation');

export const filterSchema = Joi.object().pattern(
  industryNameSchema,
  industryWithSpecialisationSchema,
).label('Filter');
