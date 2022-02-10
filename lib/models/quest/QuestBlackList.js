"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestBlackList = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Quest_1 = require("./Quest");
const Admin_1 = require("../admin/Admin");
const types_1 = require("../types");
let QuestBlackList = class QuestBlackList extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestBlackList.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestBlackList.prototype, "blockedByAdminId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestBlackList.prototype, "unblockedByAdminId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestBlackList.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], QuestBlackList.prototype, "reason", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestBlackList.prototype, "questStatusBeforeBlocking", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.BlackListStatus.Blocked })
], QuestBlackList.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], QuestBlackList.prototype, "unblockedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, { constraints: false })
], QuestBlackList.prototype, "quest", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin, { constraints: false, foreignKey: 'blockedByAdminId' })
], QuestBlackList.prototype, "blockedByAdmin", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin, { constraints: false, foreignKey: 'unblockedByAdminId' })
], QuestBlackList.prototype, "unblockedByAdmin", void 0);
QuestBlackList = __decorate([
    sequelize_typescript_1.Table
], QuestBlackList);
exports.QuestBlackList = QuestBlackList;
