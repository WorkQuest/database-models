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
exports.User = exports.UserRole = exports.UserStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const bcrypt = require("bcrypt");
const defaultUserSettings = {
    emailConfirm: null
};
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Unconfirmed"] = 0] = "Unconfirmed";
    UserStatus[UserStatus["Confirmed"] = 1] = "Confirmed";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["Employer"] = "employer";
    UserRole["Worker"] = "worker";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User extends sequelize_typescript_1.Model {
    passwordCompare(pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.compareSync(pwd, this.password);
        });
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        set(value) {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(value, salt);
            this.setDataValue("password", hash);
        },
        get() {
            return this.getDataValue("password");
        }
    })
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], User.prototype, "avatar", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], User.prototype, "role", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: defaultUserSettings })
], User.prototype, "settings", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: UserStatus.Unconfirmed })
], User.prototype, "status", void 0);
User = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["password", "avatar", "settings", "createdAt", "updatedAt"]
            }
        },
        withPassword: {
            attributes: {
                include: ["password", "settings"]
            }
        }
    })),
    sequelize_typescript_1.Table
], User);
exports.User = User;
