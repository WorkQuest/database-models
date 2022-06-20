"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsPlatformStatistic = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let ReportsPlatformStatistic = class ReportsPlatformStatistic extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ReportsPlatformStatistic.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ReportsPlatformStatistic.prototype, "declinedUsers", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ReportsPlatformStatistic.prototype, "decidedUsers", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ReportsPlatformStatistic.prototype, "quests", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ReportsPlatformStatistic.prototype, "declinedQuests", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ReportsPlatformStatistic.prototype, "decidedQuests", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true })
], ReportsPlatformStatistic.prototype, "date", void 0);
ReportsPlatformStatistic = __decorate([
    sequelize_typescript_1.Table
], ReportsPlatformStatistic);
exports.ReportsPlatformStatistic = ReportsPlatformStatistic;
