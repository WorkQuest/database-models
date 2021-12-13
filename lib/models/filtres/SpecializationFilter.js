"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const IndustryFilter_1 = require("./IndustryFilter");
let SpecializationFilter = class SpecializationFilter extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER })
], SpecializationFilter.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => IndustryFilter_1.IndustryFilter),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, references: { model: "IndustryFilters", key: "id" } })
], SpecializationFilter.prototype, "industryKey", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SpecializationFilter.prototype, "specialization", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => IndustryFilter_1.IndustryFilter)
], SpecializationFilter.prototype, "industryFilter", void 0);
SpecializationFilter = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [{
                    model: IndustryFilter_1.IndustryFilter,
                    as: 'industryFilter',
                }]
        }
    })),
    sequelize_typescript_1.Table
], SpecializationFilter);
exports.SpecializationFilter = SpecializationFilter;
