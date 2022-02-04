"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminChangeRole = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const types_1 = require("../types");
let AdminChangeRole = class AdminChangeRole extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], AdminChangeRole.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], AdminChangeRole.prototype, "adminId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminChangeRole.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminChangeRole.prototype, "role", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: {} })
], AdminChangeRole.prototype, "additionalInfo", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DECIMAL, defaultValue: null })
], AdminChangeRole.prototype, "wagePerHour", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], AdminChangeRole.prototype, "workplace", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.Priority.AllPriority })
], AdminChangeRole.prototype, "priority", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], AdminChangeRole.prototype, "userChangeRole", void 0);
AdminChangeRole = __decorate([
    sequelize_typescript_1.Table
], AdminChangeRole);
exports.AdminChangeRole = AdminChangeRole;
