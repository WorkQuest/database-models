"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestDispute = exports.DisputeReason = exports.DisputeStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const Quest_1 = require("./Quest");
const Admin_1 = require("../admin/Admin");
var DisputeStatus;
(function (DisputeStatus) {
    DisputeStatus[DisputeStatus["pending"] = 0] = "pending";
    DisputeStatus[DisputeStatus["inProgress"] = 1] = "inProgress";
    DisputeStatus[DisputeStatus["closed"] = 2] = "closed";
})(DisputeStatus = exports.DisputeStatus || (exports.DisputeStatus = {}));
var DisputeReason;
(function (DisputeReason) {
    DisputeReason["noAnswer"] = "noAnswer";
    DisputeReason["poorlyDoneJob"] = "poorlyDoneJob";
    DisputeReason["additionalRequirement"] = "additionalRequirement";
    DisputeReason["requirementDoesNotMatch"] = "requirementDoesNotMatch";
    DisputeReason["noConfirmationOfComplete"] = "noConfirmationOfComplete";
    DisputeReason["anotherReason"] = "anotherReason";
})(DisputeReason = exports.DisputeReason || (exports.DisputeReason = {}));
let QuestDispute = class QuestDispute extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: utils_1.getUUID, primaryKey: true })
], QuestDispute.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDispute.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDispute.prototype, "openDisputeUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDispute.prototype, "opponentUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestDispute.prototype, "assignedAdminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true })
], QuestDispute.prototype, "disputeNumber", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestDispute.prototype, "openOnQuestStatus", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: DisputeStatus.pending })
], QuestDispute.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: DisputeReason.anotherReason })
], QuestDispute.prototype, "reason", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], QuestDispute.prototype, "problemDescription", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], QuestDispute.prototype, "decisionDescription", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], QuestDispute.prototype, "acceptedAt", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], QuestDispute.prototype, "resolvedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'openDisputeUserId')
], QuestDispute.prototype, "openDisputeUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'opponentUserId')
], QuestDispute.prototype, "opponentUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin, 'assignedAdminId')
], QuestDispute.prototype, "assignedAdmin", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, 'questId')
], QuestDispute.prototype, "quest", void 0);
QuestDispute = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'openDisputeUser'
                }, {
                    model: User_1.User.scope('short'),
                    as: 'opponentUser'
                }, {
                    model: Quest_1.Quest,
                    as: 'quest'
                }]
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], QuestDispute);
exports.QuestDispute = QuestDispute;
