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
var DisputeStatus;
(function (DisputeStatus) {
    DisputeStatus["active"] = "active";
    DisputeStatus["resolved"] = "resolved";
})(DisputeStatus = exports.DisputeStatus || (exports.DisputeStatus = {}));
exports.DisputeStatuses = Object.values(DisputeStatus);
let Disputes = class Disputes extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: utils_1.getUUID, primaryKey: true })
], Disputes.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], Disputes.prototype, "employerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], Disputes.prototype, "workerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Disputes.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: DisputeStatus.active })
], Disputes.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Disputes.prototype, "problem", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Disputes.prototype, "decision", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'employerId')
], Disputes.prototype, "employer", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'workerId')
], Disputes.prototype, "worker", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, 'questId')
], Disputes.prototype, "quest", void 0);
Disputes = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["password", "settings", "createdAt", "updatedAt", "deletedAt"],
            },
        },
        withPassword: {
            attributes: {
                include: ["password", "settings"],
            },
        },
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], Disputes);
exports.Disputes = Disputes;
