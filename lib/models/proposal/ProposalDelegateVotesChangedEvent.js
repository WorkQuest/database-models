"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalDelegateVotesChangedEvent = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Wallet_1 = require("../wallet/Wallet");
let ProposalDelegateVotesChangedEvent = class ProposalDelegateVotesChangedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ProposalDelegateVotesChangedEvent.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateVotesChangedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateVotesChangedEvent.prototype, "delegator", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateVotesChangedEvent.prototype, "delegatee", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], ProposalDelegateVotesChangedEvent.prototype, "previousBalance", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], ProposalDelegateVotesChangedEvent.prototype, "newBalance", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateVotesChangedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateVotesChangedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, { foreignKey: 'delegator', targetKey: 'address' })
], ProposalDelegateVotesChangedEvent.prototype, "delegatorWallet", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, { foreignKey: 'delegatee', targetKey: 'address' })
], ProposalDelegateVotesChangedEvent.prototype, "delegateeWallet", void 0);
ProposalDelegateVotesChangedEvent = __decorate([
    sequelize_typescript_1.Table
], ProposalDelegateVotesChangedEvent);
exports.ProposalDelegateVotesChangedEvent = ProposalDelegateVotesChangedEvent;
