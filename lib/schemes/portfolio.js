"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const media_1 = require("./media");
const common_1 = require("./common");
const portfolioIdSchema = common_1.idSchema.label('PortfolioId');
exports.portfolioTitleSchema = Joi.string().example('Title...').label('Title');
exports.portfolioDescriptionSchema = Joi.string().example('Description..').label('Description');
exports.portfolioSchema = Joi.object({
    id: portfolioIdSchema,
    title: exports.portfolioTitleSchema,
    description: exports.portfolioDescriptionSchema,
    medias: media_1.mediaIdsSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('Portfolio');
exports.portfoliosSchema = Joi.array().items(exports.portfolioSchema).label('Portfolios');
