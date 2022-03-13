"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestAssignedEvent = exports.QuestAssignedEventStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestAssignedEventStatus;
(function (QuestAssignedEventStatus) {
    QuestAssignedEventStatus[QuestAssignedEventStatus["QuestStatusDoesNotMatch"] = -2] = "QuestStatusDoesNotMatch";
    QuestAssignedEventStatus[QuestAssignedEventStatus["WorkerOrQuestEntityNotFound"] = -1] = "WorkerOrQuestEntityNotFound";
    QuestAssignedEventStatus[QuestAssignedEventStatus["Successfully"] = 0] = "Successfully";
})(QuestAssignedEventStatus = exports.QuestAssignedEventStatus || (exports.QuestAssignedEventStatus = {}));
let QuestAssignedEvent = class QuestAssignedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestAssignedEvent.prototype, "workerAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestAssignedEvent.prototype, "contractAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestAssignedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BIGINT)
], QuestAssignedEvent.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestAssignedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestAssignedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestAssignedEvent.prototype, "status", void 0);
QuestAssignedEvent = __decorate([
    sequelize_typescript_1.Table
], QuestAssignedEvent);
exports.QuestAssignedEvent = QuestAssignedEvent;
