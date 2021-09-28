"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
__export(require("./quest"));
