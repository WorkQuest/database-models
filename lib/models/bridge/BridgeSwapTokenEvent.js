"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeSwapTokenEvent = exports.SwapEvents = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var SwapEvents;
(function (SwapEvents) {
    SwapEvents["swapRedeemed"] = "SwapRedeemed";
    SwapEvents["swapInitialized"] = "SwapInitialized";
})(SwapEvents = exports.SwapEvents || (exports.SwapEvents = {}));
let BridgeSwapTokenEvent = class BridgeSwapTokenEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, allowNull: false })
], BridgeSwapTokenEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED, allowNull: false })
], BridgeSwapTokenEvent.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "event", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "messageHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], BridgeSwapTokenEvent.prototype, "nonce", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "initiator", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "recipient", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DECIMAL, allowNull: false })
], BridgeSwapTokenEvent.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], BridgeSwapTokenEvent.prototype, "chainTo", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], BridgeSwapTokenEvent.prototype, "chainFrom", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BridgeSwapTokenEvent.prototype, "symbol", void 0);
BridgeSwapTokenEvent = __decorate([
    sequelize_typescript_1.Table
], BridgeSwapTokenEvent);
exports.BridgeSwapTokenEvent = BridgeSwapTokenEvent;
