"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const models_1 = require("../models");
exports.questsResponseMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
exports.questsResponseStatusSchema = Joi.number().example(models_1.QuestsResponseStatus.Open).valid(...Object.keys(models_1.QuestsResponseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseStatus');
exports.questsResponseTypeSchema = Joi.number().example(models_1.QuestsResponseType.Response).valid(...Object.keys(models_1.QuestsResponseType).map(key => parseInt(key)).filter(key => !isNaN(key))).label('QuestsResponseType');
exports.questsResponseSchema = Joi.object({
    id: index_1.idSchema.label('QuestsResponseId'),
    workerId: index_1.idSchema.label('WorkerId'),
    questId: index_1.idSchema.label('QuestId'),
    status: exports.questsResponseStatusSchema,
    type: exports.questsResponseTypeSchema,
    message: exports.questsResponseMessageSchema,
}).label('QuestsResponseSchema');
exports.questsResponsesSchema = Joi.array().items(exports.questsResponseSchema).label('QuestsResponsesSchema');
//# sourceMappingURL=questsResponse.js.map