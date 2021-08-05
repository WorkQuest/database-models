"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.mapPointsCountSchema = Joi.number().label('PointsCount');
exports.mapTypeSchema = Joi.string().valid('point', 'cluster').label('PointType');
exports.mapCoordinatesSchema = Joi.array().example([83.1123, 40.221]).items(Joi.number()).label('Coordinates');
exports.mapClusterRadiusSchema = Joi.number().allow(null).label('ClusterRadius');
exports.mapPointSchema = Joi.object({
    questId: common_1.idSchema.label('QuestId'),
    pointsCount: exports.mapPointsCountSchema,
    type: exports.mapTypeSchema,
    coordinates: exports.mapCoordinatesSchema,
    clusterRadius: exports.mapClusterRadiusSchema,
}).label('MapPoint');
exports.mapPointsSchema = Joi.array().items(exports.mapPointSchema).label('MapPoints');