"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalDelegateUserHistory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Wallet_1 = require("../wallet/Wallet");
let ProposalDelegateUserHistory = class ProposalDelegateUserHistory extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateUserHistory.prototype, "delegator", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateUserHistory.prototype, "delegatee", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateUserHistory.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateUserHistory.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, {
        foreignKey: 'delegator',
        targetKey: 'address',
        constraints: false
    })
], ProposalDelegateUserHistory.prototype, "delegatorWallet", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, {
        foreignKey: 'delegatee',
        targetKey: 'address',
        constraints: false
    })
], ProposalDelegateUserHistory.prototype, "delegateeWallet", void 0);
ProposalDelegateUserHistory = __decorate([
    sequelize_typescript_1.Table
], ProposalDelegateUserHistory);
exports.ProposalDelegateUserHistory = ProposalDelegateUserHistory;
