"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestSpecializationFilter = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Quest_1 = require("./Quest");
const SpecializationFilter_1 = require("../filtres/SpecializationFilter");
const IndustryFilter_1 = require("../filtres/IndustryFilter");
let QuestSpecializationFilter = class QuestSpecializationFilter extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestSpecializationFilter.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestSpecializationFilter.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => IndustryFilter_1.IndustryFilter),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestSpecializationFilter.prototype, "industryKey", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => SpecializationFilter_1.SpecializationFilter),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestSpecializationFilter.prototype, "specializationKey", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest)
], QuestSpecializationFilter.prototype, "quest", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => IndustryFilter_1.IndustryFilter)
], QuestSpecializationFilter.prototype, "industryFilter", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => SpecializationFilter_1.SpecializationFilter)
], QuestSpecializationFilter.prototype, "specializationFilter", void 0);
QuestSpecializationFilter = __decorate([
    sequelize_typescript_1.Table
], QuestSpecializationFilter);
exports.QuestSpecializationFilter = QuestSpecializationFilter;
