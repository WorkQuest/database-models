"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaiseViewsPlatformStatistic = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let RaiseViewsPlatformStatistic = class RaiseViewsPlatformStatistic extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "profilesTotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "profilesGoldPlus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "profilesGold", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "profilesSilver", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "profilesBronze", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "questsTotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "questsGoldPlus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "questsGold", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "questsSilver", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RaiseViewsPlatformStatistic.prototype, "questsBronze", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true })
], RaiseViewsPlatformStatistic.prototype, "date", void 0);
RaiseViewsPlatformStatistic = __decorate([
    sequelize_typescript_1.Table
], RaiseViewsPlatformStatistic);
exports.RaiseViewsPlatformStatistic = RaiseViewsPlatformStatistic;
