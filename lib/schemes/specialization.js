"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specializationsFilerSchema = exports.specializationKeysSchema = exports.industryKeysSchema = exports.specializationsSchema = exports.industriesSchema = exports.specializationFilerSchema = exports.specializationSchema = exports.industrySchema = exports.specializationNameSchema = exports.specializationKeySchema = exports.industryNameSchema = exports.industryKeySchema = void 0;
const Joi = require("joi");
exports.industryKeySchema = Joi.string().pattern(/\d+/).example('1').label("IndustryKey");
exports.industryNameSchema = Joi.string().example('Programming').label('IndustryName');
exports.specializationKeySchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('SpecializationKey');
exports.specializationNameSchema = Joi.string().example('IT').label('SpecializationName');
exports.industrySchema = Joi.object({
    key: exports.industryKeySchema,
    industry: exports.industryNameSchema,
}).label('Industry');
exports.specializationSchema = Joi.object({
    key: exports.specializationKeySchema,
    specialization: exports.specializationNameSchema,
    industry: exports.industrySchema,
}).label('Specialization');
exports.specializationFilerSchema = Joi.alternatives().try(exports.industryKeySchema, exports.specializationKeySchema).label('SpecializationFiler');
exports.industriesSchema = Joi.array().items(exports.industrySchema).label('Industries');
exports.specializationsSchema = Joi.array().items(exports.specializationSchema).label('Specializations');
exports.industryKeysSchema = Joi.array().items(exports.industryKeySchema).label('IndustryKeys');
exports.specializationKeysSchema = Joi.array().items(exports.specializationKeySchema).label('SpecializationKeys');
exports.specializationsFilerSchema = Joi.array().items(exports.specializationFilerSchema).label('SpecializationFilers');
