"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleChange = exports.ChangeRoleStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const User_1 = require("./User");
var ChangeRoleStatus;
(function (ChangeRoleStatus) {
    ChangeRoleStatus[ChangeRoleStatus["Canceled"] = -1] = "Canceled";
    ChangeRoleStatus[ChangeRoleStatus["Pending"] = 0] = "Pending";
    ChangeRoleStatus[ChangeRoleStatus["Completed"] = 1] = "Completed";
})(ChangeRoleStatus = exports.ChangeRoleStatus || (exports.ChangeRoleStatus = {}));
let RoleChange = class RoleChange extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], RoleChange.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], RoleChange.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: ChangeRoleStatus.Pending })
], RoleChange.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], RoleChange.prototype, "reason", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: null })
], RoleChange.prototype, "changedFrom", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: null })
], RoleChange.prototype, "changedTo", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, allowNull: true, defaultValue: null })
], RoleChange.prototype, "changedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], RoleChange.prototype, "user", void 0);
RoleChange = __decorate([
    sequelize_typescript_1.Table
], RoleChange);
exports.RoleChange = RoleChange;
