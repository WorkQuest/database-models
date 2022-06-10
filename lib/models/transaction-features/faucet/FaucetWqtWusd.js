"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaucetWqtWusd = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Transaction_1 = require("../Transaction");
let FaucetWqtWusd = class FaucetWqtWusd extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Transaction_1.Transaction),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], FaucetWqtWusd.prototype, "transactionHashFaucetSentToken", void 0);
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
], FaucetWqtWusd.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FaucetWqtWusd.prototype, "error", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Transaction_1.Transaction)
], FaucetWqtWusd.prototype, "tx", void 0);
FaucetWqtWusd = __decorate([
    sequelize_typescript_1.Table
], FaucetWqtWusd);
exports.FaucetWqtWusd = FaucetWqtWusd;
