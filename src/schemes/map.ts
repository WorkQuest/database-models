import * as Joi from "joi";
import {idSchema} from "./index";

export const mapPointsCountSchema = Joi.number().label('PointsCount');
export const mapTypeSchema = Joi.string().valid('point', 'cluster').label('PointType');
export const mapCoordinatesSchema = Joi.array().example([83.1123, 40.221]).items(Joi.number()).label('Coordinates');
export const mapClusterRadiusSchema = Joi.number().allow(null).label('ClusterRadius');

export const mapPointSchema = Joi.object({
  questId: idSchema.label('QuestId'),
  pointsCount: mapPointsCountSchema,
  type: mapTypeSchema,
  coordinates: mapCoordinatesSchema,
  clusterRadius: mapClusterRadiusSchema,
}).label('MapPoint');

export const mapPointsSchema = Joi.array().items(mapPointSchema).label('MapPoints');
