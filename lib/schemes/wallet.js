"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletAddressSchema = void 0;
const Joi = require("joi");
exports.walletAddressSchema = Joi.string().hex();
