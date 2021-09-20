"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.totpValidate = exports.error = exports.getUUID = void 0;
const speakeasy = require("speakeasy");
const uuid_1 = require("uuid");
const boom_1 = require("@hapi/boom");
function getUUID() {
    return uuid_1.v4();
}
exports.getUUID = getUUID;
function error(code, msg, data) {
    return new boom_1.Boom(msg, {
        data: {
            code,
            data,
            api: true
        },
        statusCode: Math.floor(code / 1000)
    });
}
exports.error = error;
function totpValidate(totp, secret) {
    return speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token: Number(totp)
    });
}
exports.totpValidate = totpValidate;
__exportStar(require("./quest"), exports);
