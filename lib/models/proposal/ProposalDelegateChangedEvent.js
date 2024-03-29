"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalDelegateChangedEvent = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Wallet_1 = require("../wallet/Wallet");
let ProposalDelegateChangedEvent = class ProposalDelegateChangedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ProposalDelegateChangedEvent.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateChangedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateChangedEvent.prototype, "delegator", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateChangedEvent.prototype, "fromDelegate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateChangedEvent.prototype, "toDelegate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateChangedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ProposalDelegateChangedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, {
        foreignKey: 'delegator',
        targetKey: 'address',
        constraints: false
    })
], ProposalDelegateChangedEvent.prototype, "delegatorWallet", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, {
        foreignKey: 'fromDelegate',
        targetKey: 'address',
        constraints: false
    })
], ProposalDelegateChangedEvent.prototype, "fromDelegateWallet", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Wallet_1.Wallet, {
        foreignKey: 'toDelegate',
        targetKey: 'address',
        constraints: false
    })
], ProposalDelegateChangedEvent.prototype, "toDelegateWallet", void 0);
ProposalDelegateChangedEvent = __decorate([
    sequelize_typescript_1.Table
], ProposalDelegateChangedEvent);
exports.ProposalDelegateChangedEvent = ProposalDelegateChangedEvent;
