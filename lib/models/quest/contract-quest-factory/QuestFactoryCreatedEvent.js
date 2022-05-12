"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
var QuestFactoryStatus;
(function (QuestFactoryStatus) {
    QuestFactoryStatus[QuestFactoryStatus["QuestEntityNotFound"] = -1] = "QuestEntityNotFound";
    QuestFactoryStatus[QuestFactoryStatus["Successfully"] = 0] = "Successfully";
})(QuestFactoryStatus = exports.QuestFactoryStatus || (exports.QuestFactoryStatus = {}));
let QuestFactoryCreatedEvent = class QuestFactoryCreatedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL)
], QuestFactoryCreatedEvent.prototype, "nonce", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestFactoryCreatedEvent.prototype, "jobHash", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestFactoryCreatedEvent.prototype, "employerAddress", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestFactoryCreatedEvent.prototype, "contractAddress", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestFactoryCreatedEvent.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], QuestFactoryCreatedEvent.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestFactoryCreatedEvent.prototype, "network", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestFactoryCreatedEvent.prototype, "status", void 0);
QuestFactoryCreatedEvent = __decorate([
    sequelize_typescript_1.Table
], QuestFactoryCreatedEvent);
exports.QuestFactoryCreatedEvent = QuestFactoryCreatedEvent;
