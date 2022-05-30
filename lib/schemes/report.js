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
exports.reportSchema = exports.reportEntityTypeSchema = exports.reportStatusSchema = exports.reportDescriptionSchema = exports.reportTitleSchema = void 0;
const Joi = __importStar(require("joi"));
const models_1 = require("../models");
const common_1 = require("./common");
const media_1 = require("./media");
const user_1 = require("./user");
const admin_1 = require("./admin");
exports.reportTitleSchema = Joi.string().max(255).example('Breaking the rules...').label('ReportTitle');
exports.reportDescriptionSchema = Joi.string().min(50).max(1000).example('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').label('ReportDescription');
exports.reportStatusSchema = Joi.number().valid(-1, 0, 1).example(0).label('ReportStatus');
exports.reportEntityTypeSchema = Joi.string().valid(...Object.values(models_1.ReportEntityType)).example(models_1.ReportEntityType.User).label('ReportEntityType');
exports.reportSchema = Joi.object({
    id: common_1.idSchema,
    authorId: common_1.idSchema,
    resolvedByAdminId: common_1.idSchema,
    title: exports.reportTitleSchema,
    description: exports.reportDescriptionSchema,
    status: exports.reportStatusSchema,
    entityType: exports.reportEntityTypeSchema,
    entityId: common_1.idSchema,
    resolvedAt: common_1.isoDateSchema,
    medias: media_1.mediasUrlOnlySchema,
    user: user_1.userShortSchema,
    admin: admin_1.adminSchema,
}).label('ReportSchema');
