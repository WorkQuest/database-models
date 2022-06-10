"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaucetWqtWusd = exports.FaucetAmount = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var FaucetAmount;
(function (FaucetAmount) {
    FaucetAmount["WQT"] = "100";
    FaucetAmount["WUSD"] = "1000";
})(FaucetAmount = exports.FaucetAmount || (exports.FaucetAmount = {}));
let FaucetWqtWusd = class FaucetWqtWusd extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FaucetWqtWusd.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FaucetWqtWusd.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL, allowNull: false })
], FaucetWqtWusd.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FaucetWqtWusd.prototype, "symbol", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], FaucetWqtWusd.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FaucetWqtWusd.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FaucetWqtWusd.prototype, "network", void 0);
FaucetWqtWusd = __decorate([
    sequelize_typescript_1.Table
], FaucetWqtWusd);
exports.FaucetWqtWusd = FaucetWqtWusd;
