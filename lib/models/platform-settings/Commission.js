"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commission = exports.CommissionCurrency = exports.CommissionTitle = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var CommissionTitle;
(function (CommissionTitle) {
    CommissionTitle["CommissionSwapWQT"] = "CommissionSwapWQT";
})(CommissionTitle = exports.CommissionTitle || (exports.CommissionTitle = {}));
var CommissionCurrency;
(function (CommissionCurrency) {
    CommissionCurrency["WQT"] = "WQT";
    CommissionCurrency["ETH"] = "ETH";
    CommissionCurrency["BNB"] = "BNB";
    CommissionCurrency["USDT"] = "USDT";
    CommissionCurrency["Percent"] = "%";
})(CommissionCurrency = exports.CommissionCurrency || (exports.CommissionCurrency = {}));
let Commission = class Commission extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING })
], Commission.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: {} })
], Commission.prototype, "commission", void 0);
Commission = __decorate([
    sequelize_typescript_1.Table
], Commission);
exports.Commission = Commission;
