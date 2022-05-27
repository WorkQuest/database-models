"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let DailyLiquidityWqtWbnb = class DailyLiquidityWqtWbnb extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER })
], DailyLiquidityWqtWbnb.prototype, "daySinceEpochBeginning", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], DailyLiquidityWqtWbnb.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DailyLiquidityWqtWbnb.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DailyLiquidityWqtWbnb.prototype, "bnbPool", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DailyLiquidityWqtWbnb.prototype, "wqtPool", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DailyLiquidityWqtWbnb.prototype, "usdPriceBNB", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DailyLiquidityWqtWbnb.prototype, "usdPriceWQT", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DailyLiquidityWqtWbnb.prototype, "reserveUSD", void 0);
DailyLiquidityWqtWbnb = __decorate([
    sequelize_typescript_1.Table({
        modelName: 'DailyLiquidityWqtWbnb',
        tableName: 'DailyLiquidityWqtWbnb',
        freezeTableName: true,
    })
], DailyLiquidityWqtWbnb);
exports.DailyLiquidityWqtWbnb = DailyLiquidityWqtWbnb;
