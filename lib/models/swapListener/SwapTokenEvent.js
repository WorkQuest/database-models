"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let SwapTokenEvent = class SwapTokenEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, allowNull: false })
], SwapTokenEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], SwapTokenEvent.prototype, "messageHash", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], SwapTokenEvent.prototype, "nonce", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN)
], SwapTokenEvent.prototype, "active", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapTokenEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapTokenEvent.prototype, "initiator", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapTokenEvent.prototype, "recipient", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DOUBLE)
], SwapTokenEvent.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], SwapTokenEvent.prototype, "chainTo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], SwapTokenEvent.prototype, "chainFrom", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapTokenEvent.prototype, "symbol", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], SwapTokenEvent.prototype, "blockNumber", void 0);
SwapTokenEvent = __decorate([
    sequelize_typescript_1.Table
], SwapTokenEvent);
exports.SwapTokenEvent = SwapTokenEvent;
