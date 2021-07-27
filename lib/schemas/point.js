"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointsArraySchema = exports.pointObjectSchema = exports.pointIdSchema = exports.pointTextSchema = exports.pointGeoSchema = void 0;
const Joi = require("joi");
exports.pointGeoSchema = Joi.string().regex(/^\d+(.\d+)?$/).example("30.1231").label("PointGeoSchema");
exports.pointTextSchema = Joi.string().example("some text").label("PointTextSchema");
exports.pointIdSchema = Joi.string().uuid().example("791c3cde-ec2b-4c76-8016-7f0c0e12b8d4").label("PointIdSchema");
exports.pointObjectSchema = Joi.object({
    id: exports.pointIdSchema,
    latitude: exports.pointGeoSchema,
    longitude: exports.pointGeoSchema,
    text: exports.pointTextSchema
}).label("PointObjectSchema");
exports.pointsArraySchema = Joi.array().items(exports.pointObjectSchema).label("PointsArraySchema");
