"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoPlatformStatistic = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let DaoPlatformStatistic = class DaoPlatformStatistic extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], DaoPlatformStatistic.prototype, "votes", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL, defaultValue: '0' })
], DaoPlatformStatistic.prototype, "delegatedValue", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, defaultValue: 0 })
], DaoPlatformStatistic.prototype, "votesFor", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, defaultValue: 0 })
], DaoPlatformStatistic.prototype, "votesAgain", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true })
], DaoPlatformStatistic.prototype, "date", void 0);
DaoPlatformStatistic = __decorate([
    sequelize_typescript_1.Table
], DaoPlatformStatistic);
exports.DaoPlatformStatistic = DaoPlatformStatistic;
