"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Quest_1 = require("../quest/Quest");
const utils_1 = require("../../utils");
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestRaiseStatus;
(function (QuestRaiseStatus) {
    QuestRaiseStatus[QuestRaiseStatus["Paid"] = 0] = "Paid";
    QuestRaiseStatus[QuestRaiseStatus["Closed"] = 1] = "Closed";
})(QuestRaiseStatus = exports.QuestRaiseStatus || (exports.QuestRaiseStatus = {}));
var QuestRaiseDuration;
(function (QuestRaiseDuration) {
    QuestRaiseDuration[QuestRaiseDuration["OneDay"] = 1] = "OneDay";
    QuestRaiseDuration[QuestRaiseDuration["FiveDays"] = 5] = "FiveDays";
    QuestRaiseDuration[QuestRaiseDuration["SevenDays"] = 7] = "SevenDays";
})(QuestRaiseDuration = exports.QuestRaiseDuration || (exports.QuestRaiseDuration = {}));
var QuestRaiseType;
(function (QuestRaiseType) {
    QuestRaiseType[QuestRaiseType["GoldPlus"] = 0] = "GoldPlus";
    QuestRaiseType[QuestRaiseType["Gold"] = 1] = "Gold";
    QuestRaiseType[QuestRaiseType["Silver"] = 2] = "Silver";
    QuestRaiseType[QuestRaiseType["Bronze"] = 3] = "Bronze";
})(QuestRaiseType = exports.QuestRaiseType || (exports.QuestRaiseType = {}));
let QuestRaiseView = class QuestRaiseView extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestRaiseView.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestRaiseView.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestRaiseStatus.Closed })
], QuestRaiseView.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], QuestRaiseView.prototype, "duration", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], QuestRaiseView.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: null })
], QuestRaiseView.prototype, "endedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest)
], QuestRaiseView.prototype, "quest", void 0);
QuestRaiseView = __decorate([
    sequelize_typescript_1.Table
], QuestRaiseView);
exports.QuestRaiseView = QuestRaiseView;
