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
exports.sumsubAccessToken = Joi.string().example("_act-681cdf47-c418-4cba-8207-3c3415a3a14c").label("SumSubAccessToken");
exports.sumsubUserId = Joi.string().example("e6685019-e42a-40ed-9327-58e3de849c3c").label("SumSubUserId");
