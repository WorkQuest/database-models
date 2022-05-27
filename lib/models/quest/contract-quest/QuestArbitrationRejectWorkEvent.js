"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestArbitrationRejectWorkStatus;
(function (QuestArbitrationRejectWorkStatus) {
    QuestArbitrationRejectWorkStatus[QuestArbitrationRejectWorkStatus["DisputeStatusDoesNotMatch"] = -3] = "DisputeStatusDoesNotMatch";
    QuestArbitrationRejectWorkStatus[QuestArbitrationRejectWorkStatus["QuestNotFound"] = -2] = "QuestNotFound";
    QuestArbitrationRejectWorkStatus[QuestArbitrationRejectWorkStatus["DisputeNotFound"] = -1] = "DisputeNotFound";
    QuestArbitrationRejectWorkStatus[QuestArbitrationRejectWorkStatus["Successfully"] = 0] = "Successfully";
})(QuestArbitrationRejectWorkStatus = exports.QuestArbitrationRejectWorkStatus || (exports.QuestArbitrationRejectWorkStatus = {}));
let QuestArbitrationRejectWorkEvent = class QuestArbitrationRejectWorkEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationRejectWorkEvent.prototype, "contractAddress", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationRejectWorkEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationRejectWorkEvent.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestArbitrationRejectWorkEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestArbitrationRejectWorkEvent.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.SMALLINT, allowNull: false })
], QuestArbitrationRejectWorkEvent.prototype, "status", void 0);
QuestArbitrationRejectWorkEvent = __decorate([
    sequelize_typescript_1.Table
], QuestArbitrationRejectWorkEvent);
exports.QuestArbitrationRejectWorkEvent = QuestArbitrationRejectWorkEvent;
