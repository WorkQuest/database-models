"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specializationsFilerSchema = exports.specializationFilerSchema = exports.specializationsSchema = exports.specializationSchema = void 0;
const Joi = require("joi");
exports.specializationSchema = Joi.string().pattern(/\d+.\d+/).example('1.501').label('Specialization');
exports.specializationsSchema = Joi.array().items(exports.specializationSchema).label('Specializations');
exports.specializationFilerSchema = Joi.alternatives().try(Joi.string().pattern(/\d+.\d+/).example('1.501'), Joi.string().pattern(/\d+/).example('1')).label('SpecializationFiler');
exports.specializationsFilerSchema = Joi.array().items(exports.specializationFilerSchema).label('SpecializationFiler');
