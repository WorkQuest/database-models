"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestJobFinishedEvent = exports.QuestJobFinishedEventStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestJobFinishedEventStatus;
(function (QuestJobFinishedEventStatus) {
    QuestJobFinishedEventStatus[QuestJobFinishedEventStatus["QuestStatusDoesNotMatch"] = -2] = "QuestStatusDoesNotMatch";
    QuestJobFinishedEventStatus[QuestJobFinishedEventStatus["QuestEntityNotFound"] = -1] = "QuestEntityNotFound";
    QuestJobFinishedEventStatus[QuestJobFinishedEventStatus["Successfully"] = 0] = "Successfully";
})(QuestJobFinishedEventStatus = exports.QuestJobFinishedEventStatus || (exports.QuestJobFinishedEventStatus = {}));
let QuestJobFinishedEvent = class QuestJobFinishedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestJobFinishedEvent.prototype, "contractAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestJobFinishedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestJobFinishedEvent.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestJobFinishedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestJobFinishedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestJobFinishedEvent.prototype, "status", void 0);
QuestJobFinishedEvent = __decorate([
    sequelize_typescript_1.Table
], QuestJobFinishedEvent);
exports.QuestJobFinishedEvent = QuestJobFinishedEvent;
