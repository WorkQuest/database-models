"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const User_1 = require("./User");
const Quest_1 = require("./Quest");
const errors_1 = require("../utils/errors");
var DisputeStatus;
(function (DisputeStatus) {
    DisputeStatus[DisputeStatus["pending"] = 0] = "pending";
    DisputeStatus[DisputeStatus["inProgress"] = 1] = "inProgress";
    DisputeStatus[DisputeStatus["completed"] = 2] = "completed";
})(DisputeStatus = exports.DisputeStatus || (exports.DisputeStatus = {}));
exports.DisputeStatuses = Object.values(DisputeStatus);
let QuestDispute = class QuestDispute extends sequelize_typescript_1.Model {
    mustHaveStatus(status) {
        if (this.status !== status) {
            throw utils_1.error(errors_1.Errors.InvalidStatus, 'Invalid status', {});
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: utils_1.getUUID, primaryKey: true })
], QuestDispute.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true })
], QuestDispute.prototype, "disputeNumber", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], QuestDispute.prototype, "openDisputeUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], QuestDispute.prototype, "opponentUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestDispute.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: DisputeStatus.pending })
], QuestDispute.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], QuestDispute.prototype, "problem", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], QuestDispute.prototype, "decision", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'openDisputeUserId')
], QuestDispute.prototype, "openDisputeUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'opponentUserId')
], QuestDispute.prototype, "opponentUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, 'questId')
], QuestDispute.prototype, "quest", void 0);
QuestDispute = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User,
                    as: 'openDisputeUser'
                }, {
                    model: User_1.User,
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