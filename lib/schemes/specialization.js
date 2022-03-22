"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
