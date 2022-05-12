"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestJobCancelledEventStatus;
(function (QuestJobCancelledEventStatus) {
    QuestJobCancelledEventStatus[QuestJobCancelledEventStatus["QuestStatusDoesNotMatch"] = -2] = "QuestStatusDoesNotMatch";
    QuestJobCancelledEventStatus[QuestJobCancelledEventStatus["QuestEntityNotFound"] = -1] = "QuestEntityNotFound";
    QuestJobCancelledEventStatus[QuestJobCancelledEventStatus["Successfully"] = 0] = "Successfully";
})(QuestJobCancelledEventStatus = exports.QuestJobCancelledEventStatus || (exports.QuestJobCancelledEventStatus = {}));
let QuestJobCancelledEvent = class QuestJobCancelledEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestJobCancelledEvent.prototype, "contractAddress", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestJobCancelledEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestJobCancelledEvent.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], QuestJobCancelledEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestJobCancelledEvent.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestJobCancelledEvent.prototype, "status", void 0);
QuestJobCancelledEvent = __decorate([
    sequelize_typescript_1.Table
], QuestJobCancelledEvent);
exports.QuestJobCancelledEvent = QuestJobCancelledEvent;
