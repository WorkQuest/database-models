"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totpValidate = exports.getUUIDInt = exports.getUUID = void 0;
const speakeasy = require("speakeasy");
const uuid_1 = require("uuid");
const uuid_int_1 = require("uuid-int");
function getUUID() {
    return (0, uuid_1.v4)();
}
exports.getUUID = getUUID;
function getUUIDInt() {
    return (0, uuid_int_1.default)(0).uuid();
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
