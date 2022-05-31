"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../user/User");
const utils_1 = require("../../utils");
const Admin_1 = require("../admin/Admin");
const sequelize_typescript_1 = require("sequelize-typescript");
var SupportStatus;
(function (SupportStatus) {
    SupportStatus[SupportStatus["Rejected"] = -1] = "Rejected";
    SupportStatus[SupportStatus["Pending"] = 0] = "Pending";
    SupportStatus[SupportStatus["Decided"] = 1] = "Decided";
})(SupportStatus = exports.SupportStatus || (exports.SupportStatus = {}));
var AdminSupportResolved;
(function (AdminSupportResolved) {
    AdminSupportResolved["Pending"] = "Pending";
    AdminSupportResolved["AnsweredByMail"] = "AnsweredByMail";
    AdminSupportResolved["RepliedToPrivateMessages"] = "RepliedToPrivateMessages";
    AdminSupportResolved["Decided"] = "Decided";
})(AdminSupportResolved = exports.AdminSupportResolved || (exports.AdminSupportResolved = {}));
let SupportUser = class SupportUser extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, defaultValue: () => utils_1.getUUID() })
], SupportUser.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, allowNull: false })
], SupportUser.prototype, "supportTicket", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SupportUser.prototype, "authorUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING })
], SupportUser.prototype, "resolvedByAdminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING })
], SupportUser.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SupportUser.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], SupportUser.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.SMALLINT, allowNull: false })
], SupportUser.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SupportUser.prototype, "decision", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE })
], SupportUser.prototype, "completionAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], SupportUser.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], SupportUser.prototype, "admin", void 0);
SupportUser = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            short: {
                attributes: ["supportTicket", "authorUserId", "email", "title", "description", "status", "decision"]
            }
        }
    })),
    sequelize_typescript_1.Table
], SupportUser);
exports.SupportUser = SupportUser;
