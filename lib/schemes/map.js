"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPointsSchema = exports.mapPointSchema = exports.mapClusterRadiusSchema = exports.mapCoordinatesSchema = exports.mapTypeSchema = exports.mapPointsCountSchema = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const quest_1 = require("./quest");
const user_1 = require("./user");
exports.mapPointsCountSchema = Joi.number().label('PointsCount');
exports.mapTypeSchema = Joi.string().valid('point', 'cluster').label('PointType');
exports.mapCoordinatesSchema = Joi.array().example([83.1123, 40.221]).items(Joi.number()).label('Coordinates');
exports.mapClusterRadiusSchema = Joi.number().allow(null).label('ClusterRadius');
exports.mapPointSchema = Joi.object({
    questId: common_1.idSchema,
    questStatus: quest_1.questStatusSchema,
    questPrice: quest_1.questPriceSchema,
    questPriority: common_1.prioritySchema,
    userFirstName: user_1.userFirstNameSchema,
    userLastName: user_1.userLastNameSchema,
    userAvatarUrl: common_1.urlSchema,
    pointsCount: exports.mapPointsCountSchema,
    type: exports.mapTypeSchema,
    coordinates: exports.mapCoordinatesSchema,
    clusterRadius: exports.mapClusterRadiusSchema,
}).label('MapPoint');
exports.mapPointsSchema = Joi.array().items(exports.mapPointSchema).label('MapPoints');
