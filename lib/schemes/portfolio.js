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
exports.portfoliosSchema = exports.portfolioSchema = exports.portfolioDescriptionSchema = exports.portfolioTitleSchema = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const user_1 = require("./user");
exports.portfolioTitleSchema = Joi.string().example('Title...').label('PortfolioTitle');
exports.portfolioDescriptionSchema = Joi.string().example('Description..').label('PortfolioDescription');
exports.portfolioSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    title: exports.portfolioTitleSchema,
    description: exports.portfolioDescriptionSchema,
    medias: common_1.idsSchema,
    user: user_1.userShortSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('Portfolio');
exports.portfoliosSchema = Joi.array().items(exports.portfolioSchema).label('Portfolios');
