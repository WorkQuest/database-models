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
const Admin_1 = require("./Admin");
let AdminDIsputeStatistic = class AdminDIsputeStatistic extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], AdminDIsputeStatistic.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminDIsputeStatistic.prototype, "adminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], AdminDIsputeStatistic.prototype, "resolvedDisputes", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: null })
], AdminDIsputeStatistic.prototype, "averageResolutionTime", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], AdminDIsputeStatistic.prototype, "admin", void 0);
AdminDIsputeStatistic = __decorate([
    sequelize_typescript_1.Table
], AdminDIsputeStatistic);
exports.AdminDIsputeStatistic = AdminDIsputeStatistic;
