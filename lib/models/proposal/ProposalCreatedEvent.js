"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Proposal_1 = require("./Proposal");
const utils_1 = require("../../utils");
let ProposalCreatedEvent = class ProposalCreatedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ProposalCreatedEvent.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Proposal_1.Proposal),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvent.prototype, "proposalId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvent.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], ProposalCreatedEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvent.prototype, "contractProposalId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL)
], ProposalCreatedEvent.prototype, "nonce", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvent.prototype, "proposer", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], ProposalCreatedEvent.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvent.prototype, "votingPeriod", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvent.prototype, "minimumQuorum", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL)
], ProposalCreatedEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Proposal_1.Proposal)
], ProposalCreatedEvent.prototype, "proposal", void 0);
ProposalCreatedEvent = __decorate([
    sequelize_typescript_1.Table
], ProposalCreatedEvent);
exports.ProposalCreatedEvent = ProposalCreatedEvent;
