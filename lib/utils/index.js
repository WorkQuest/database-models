"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const speakeasy = __importStar(require("speakeasy"));
const uuid_1 = require("uuid");
const uuid_int_1 = __importDefault(require("uuid-int"));
function getUUID() {
    return uuid_1.v4();
}
exports.getUUID = getUUID;
function getUUIDInt() {
    return uuid_int_1.default(0).uuid();
}
exports.getUUIDInt = getUUIDInt;
function totpValidate(totp, secret) {
    return speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token: Number(totp)
    });
}
exports.totpValidate = totpValidate;
