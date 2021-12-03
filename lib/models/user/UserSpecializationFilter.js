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
const IndustryFilter_1 = require("../filtres/IndustryFilter");
const SpecializationFilter_1 = require("../filtres/SpecializationFilter");
const User_1 = require("./User");
let UserSpecializationFilter = class UserSpecializationFilter extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], UserSpecializationFilter.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], UserSpecializationFilter.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => IndustryFilter_1.IndustryFilter),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], UserSpecializationFilter.prototype, "industryKey", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SpecializationFilter_1.SpecializationFilter),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], UserSpecializationFilter.prototype, "specializationKey", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], UserSpecializationFilter.prototype, "path", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], UserSpecializationFilter.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => IndustryFilter_1.IndustryFilter)
], UserSpecializationFilter.prototype, "industryFilter", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SpecializationFilter_1.SpecializationFilter)
], UserSpecializationFilter.prototype, "specializationFilter", void 0);
UserSpecializationFilter = __decorate([
    sequelize_typescript_1.Table
], UserSpecializationFilter);
exports.UserSpecializationFilter = UserSpecializationFilter;
