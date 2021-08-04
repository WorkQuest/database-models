"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const bcrypt = require("bcrypt");
const utils_1 = require("../utils");
const speakeasy = require("speakeasy");
const Session_1 = require("./Session");
var Role;
(function (Role) {
    Role["main"] = "main";
    Role["disput"] = "disput";
    Role["advertising"] = "advertising";
    Role["KYC"] = "kyc";
})(Role = exports.Role || (exports.Role = {}));
exports.Roles = Object.values(Role);
const defaultAdminAccountSettings = {
    security: null
};
let Admin = class Admin extends sequelize_typescript_1.Model {
    passwordCompare(pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.compareSync(pwd, this.password);
        });
    }
    validateTOTP(TOTP) {
        return speakeasy.totp.verify({
            secret: this.settings.security.TOTP.secret,
            encoding: 'base32',
            token: Number(TOTP)
        });
    }
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: utils_1.getUUID, primaryKey: true })
], Admin.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], Admin.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        set(value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash);
        },
        get() {
            return this.getDataValue('password');
        },
    })
], Admin.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Admin.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Admin.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: Role.main })
], Admin.prototype, "adminRole", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: defaultAdminAccountSettings })
], Admin.prototype, "settings", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true })
], Admin.prototype, "isActive", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Session_1.Session)
], Admin.prototype, "sessions", void 0);
Admin = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["password", "settings", "createdAt", "updatedAt", "deletedAt"],
            },
        },
        withPassword: {
            attributes: {
                include: ["password", "settings"],
            },
        },
    })),
    sequelize_typescript_1.Table
], Admin);
exports.Admin = Admin;
