"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.modelSpecializationsSchema = exports.specializationsFilerSchema = exports.specializationKeysSchema = exports.industryKeysSchema = exports.specializationFilerSchema = exports.modelSpecializationSchema = exports.specializationNameSchema = exports.specializationKeySchema = exports.industryNameSchema = exports.industryKeySchema = void 0;
const Joi = __importStar(require("joi"));
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
