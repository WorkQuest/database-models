"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfoliosSchema = exports.portfolioSchema = exports.portfolioDescriptionSchema = exports.portfolioTitleSchema = void 0;
const Joi = require("joi");
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
