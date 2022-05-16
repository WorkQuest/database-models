"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const SwapUsdtSwapTokenEvent_1 = require("./SwapUsdtSwapTokenEvent");
let SwapUsdtSendWqt = class SwapUsdtSendWqt extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING })
], SwapUsdtSendWqt.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => SwapUsdtSwapTokenEvent_1.SwapUsdtSwapTokenEvent),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapUsdtSendWqt.prototype, "txHashSwapInitialized", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapUsdtSendWqt.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], SwapUsdtSendWqt.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], SwapUsdtSendWqt.prototype, "ratio", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapUsdtSendWqt.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapUsdtSendWqt.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL)
], SwapUsdtSendWqt.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL)
], SwapUsdtSendWqt.prototype, "gasUsed", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => SwapUsdtSwapTokenEvent_1.SwapUsdtSwapTokenEvent)
], SwapUsdtSendWqt.prototype, "txHashSwap", void 0);
SwapUsdtSendWqt = __decorate([
    sequelize_typescript_1.Table
], SwapUsdtSendWqt);
exports.SwapUsdtSendWqt = SwapUsdtSendWqt;
