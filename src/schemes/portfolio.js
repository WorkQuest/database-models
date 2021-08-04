"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfoliosSchema = exports.portfolioSchema = exports.portfolioDescriptionSchema = exports.portfolioTitleSchema = void 0;
const Joi = require("joi");
const index_1 = require("./index");
const portfolioIdSchema = index_1.idSchema.label('PortfolioId');
exports.portfolioTitleSchema = Joi.string().example('Title...').label('Title');
exports.portfolioDescriptionSchema = Joi.string().example('Description..').label('Description');
exports.portfolioSchema = Joi.object({
    id: portfolioIdSchema,
    title: exports.portfolioTitleSchema,
    description: exports.portfolioDescriptionSchema,
    medias: index_1.mediaIdsSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema,
}).label('Portfolio');
exports.portfoliosSchema = Joi.array().items(exports.portfolioSchema).label('Portfolios');
