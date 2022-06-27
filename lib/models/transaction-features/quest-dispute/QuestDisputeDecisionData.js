"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestDisputeDecisionData = exports.QuestDisputeDecision = void 0;
const Transaction_1 = require("../Transaction");
const QuestDispute_1 = require("../../quest/QuestDispute");
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestDisputeDecision;
(function (QuestDisputeDecision) {
    QuestDisputeDecision["Rework"] = "Rework";
    QuestDisputeDecision["AcceptWork"] = "AcceptWork";
    QuestDisputeDecision["RejectWork"] = "RejectWork";
})(QuestDisputeDecision = exports.QuestDisputeDecision || (exports.QuestDisputeDecision = {}));
let QuestDisputeDecisionData = class QuestDisputeDecisionData extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => QuestDispute_1.QuestDispute),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDisputeDecisionData.prototype, "disputeId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Transaction_1.Transaction),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestDisputeDecisionData.prototype, "transactionHashDisputeResolution", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestDisputeDecisionData.prototype, "decision", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], QuestDisputeDecisionData.prototype, "gasPriceAtMoment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestDisputeDecisionData.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestDisputeDecisionData.prototype, "error", void 0);
QuestDisputeDecisionData = __decorate([
    sequelize_typescript_1.Table
], QuestDisputeDecisionData);
exports.QuestDisputeDecisionData = QuestDisputeDecisionData;
