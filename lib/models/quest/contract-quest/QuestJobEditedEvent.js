"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestJobEditedStatus;
(function (QuestJobEditedStatus) {
    QuestJobEditedStatus[QuestJobEditedStatus["QuestStatusDoesNotMatch"] = -2] = "QuestStatusDoesNotMatch";
    QuestJobEditedStatus[QuestJobEditedStatus["QuestEntityNotFound"] = -1] = "QuestEntityNotFound";
    QuestJobEditedStatus[QuestJobEditedStatus["Successfully"] = 0] = "Successfully";
})(QuestJobEditedStatus = exports.QuestJobEditedStatus || (exports.QuestJobEditedStatus = {}));
let QuestJobEditedEvent = class QuestJobEditedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestJobEditedEvent.prototype, "contractAddress", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL)
], QuestJobEditedEvent.prototype, "cost", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestJobEditedEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestJobEditedEvent.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], QuestJobEditedEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestJobEditedEvent.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestJobEditedEvent.prototype, "status", void 0);
QuestJobEditedEvent = __decorate([
    sequelize_typescript_1.Table
], QuestJobEditedEvent);
exports.QuestJobEditedEvent = QuestJobEditedEvent;
