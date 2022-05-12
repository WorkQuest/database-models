"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestArbitrationReworkEvent = exports.QuestArbitrationReworkStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestArbitrationReworkStatus;
(function (QuestArbitrationReworkStatus) {
    QuestArbitrationReworkStatus[QuestArbitrationReworkStatus["DisputeStatusDoesNotMatch"] = -3] = "DisputeStatusDoesNotMatch";
    QuestArbitrationReworkStatus[QuestArbitrationReworkStatus["QuestNotFound"] = -2] = "QuestNotFound";
    QuestArbitrationReworkStatus[QuestArbitrationReworkStatus["DisputeNotFound"] = -1] = "DisputeNotFound";
    QuestArbitrationReworkStatus[QuestArbitrationReworkStatus["Successfully"] = 0] = "Successfully";
})(QuestArbitrationReworkStatus = exports.QuestArbitrationReworkStatus || (exports.QuestArbitrationReworkStatus = {}));
let QuestArbitrationReworkEvent = class QuestArbitrationReworkEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationReworkEvent.prototype, "contractAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationReworkEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationReworkEvent.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationReworkEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestArbitrationReworkEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.SMALLINT, allowNull: false })
], QuestArbitrationReworkEvent.prototype, "status", void 0);
QuestArbitrationReworkEvent = __decorate([
    sequelize_typescript_1.Table
], QuestArbitrationReworkEvent);
exports.QuestArbitrationReworkEvent = QuestArbitrationReworkEvent;
