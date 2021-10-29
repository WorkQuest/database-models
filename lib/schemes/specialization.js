"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.industryKeySchema = Joi.string().pattern(/\d+/).example('1').label("IndustryKey");
exports.industryNameSchema = Joi.string().example('Programming').label('IndustryName');
exports.specializationKeySchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('SpecializationKey');
exports.specializationNameSchema = Joi.string().example('IT').label('SpecializationName');
exports.modelSpecializationSchema = Joi.object({
    path: exports.specializationKeySchema,
}).label("ModelSpecialization");
exports.specializationFilerSchema = Joi.alternatives().try(exports.industryKeySchema, exports.specializationKeySchema).label('SpecializationFiler');
exports.industryKeysSchema = Joi.array().items(exports.industryKeySchema).label('IndustryKeys');
exports.specializationKeysSchema = Joi.array().items(exports.specializationKeySchema).label('SpecializationKeys');
exports.specializationsFilerSchema = Joi.array().items(exports.specializationFilerSchema).label('SpecializationFilers');
exports.modelSpecializationsSchema = Joi.array().items(exports.modelSpecializationSchema).label('ModelSpecializations');
exports.specialisationsSchema = Joi.object().pattern(exports.specializationNameSchema, exports.specializationKeySchema).label('Filter');
exports.industryWithSpecialisationSchema = Joi.object({
    key: exports.industryKeySchema,
    specialisationsSchema: exports.specialisationsSchema
}).label('IndustryWithSpecialisation');
exports.filterSchema = Joi.object().pattern(exports.industryNameSchema, exports.industryWithSpecialisationSchema).label('Filter');
