"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const speakeasy = require("speakeasy");
const uuid_1 = require("uuid");
function getUUID() {
    return uuid_1.v4();
}
exports.getUUID = getUUID;
function totpValidate(totp, secret) {
    return speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token: Number(totp)
    });
}
exports.totpValidate = totpValidate;
