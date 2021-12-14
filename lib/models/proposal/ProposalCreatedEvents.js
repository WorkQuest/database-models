"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
var ProposalEvent;
(function (ProposalEvent) {
    ProposalEvent["ProposalCreated"] = "ProposalCreated";
})(ProposalEvent = exports.ProposalEvent || (exports.ProposalEvent = {}));
let ProposalCreatedEvents = class ProposalCreatedEvents extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvents.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvents.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvents.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvents.prototype, "proposalId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvents.prototype, "proposer", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvents.prototype, "nonce", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], ProposalCreatedEvents.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvents.prototype, "votingPeriod", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ProposalCreatedEvents.prototype, "minimumQuorum", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvents.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ProposalCreatedEvents.prototype, "event", void 0);
ProposalCreatedEvents = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["id", "network", "event"]
            }
        }
    })),
    sequelize_typescript_1.Table
], ProposalCreatedEvents);
exports.ProposalCreatedEvents = ProposalCreatedEvents;
