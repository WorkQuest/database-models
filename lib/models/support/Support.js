"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Admin_1 = require("../admin/Admin");
const User_1 = require("../user/User");
var SupportStatus;
(function (SupportStatus) {
    SupportStatus[SupportStatus["Rejected"] = -1] = "Rejected";
    SupportStatus[SupportStatus["Created"] = 0] = "Created";
    SupportStatus[SupportStatus["Waiting"] = 1] = "Waiting";
    SupportStatus[SupportStatus["Decided"] = 2] = "Decided";
})(SupportStatus = exports.SupportStatus || (exports.SupportStatus = {}));
var AdminSupportResolved;
(function (AdminSupportResolved) {
    AdminSupportResolved["Expected"] = "Expected";
    AdminSupportResolved["AnsweredByMail"] = "AnsweredByMail";
    AdminSupportResolved["RepliedToPrivateMessages"] = "RepliedToPrivateMessages";
    AdminSupportResolved["Decided"] = "Decided";
})(AdminSupportResolved = exports.AdminSupportResolved || (exports.AdminSupportResolved = {}));
let Support = class Support extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, defaultValue: () => utils_1.getUUID() })
], Support.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, allowNull: false })
], Support.prototype, "supportTicket", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Support.prototype, "supportAuthor", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING })
], Support.prototype, "resolvedByAdminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING })
], Support.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Support.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], Support.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.SMALLINT, allowNull: false })
], Support.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Support.prototype, "resolvedStatus", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE })
], Support.prototype, "completionAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Support.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], Support.prototype, "admin", void 0);
Support = __decorate([
    sequelize_typescript_1.Table
], Support);
exports.Support = Support;
