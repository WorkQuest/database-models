"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlackList = exports.UserBlackListStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Admin_1 = require("../admin/Admin");
const User_1 = require("./User");
var UserBlackListStatus;
(function (UserBlackListStatus) {
    UserBlackListStatus[UserBlackListStatus["Blocked"] = 0] = "Blocked";
    UserBlackListStatus[UserBlackListStatus["Unblocked"] = 1] = "Unblocked";
})(UserBlackListStatus = exports.UserBlackListStatus || (exports.UserBlackListStatus = {}));
let UserBlackList = class UserBlackList extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], UserBlackList.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], UserBlackList.prototype, "blockedByAdminId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], UserBlackList.prototype, "unblockedByAdminId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], UserBlackList.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], UserBlackList.prototype, "reason", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], UserBlackList.prototype, "userStatusBeforeBlocking", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: UserBlackListStatus.Blocked })
], UserBlackList.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE)
], UserBlackList.prototype, "unlockedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, { constraints: false })
], UserBlackList.prototype, "quest", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin, { constraints: false, foreignKey: 'blockedByAdminId' })
], UserBlackList.prototype, "blockedByAdmin", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin, { constraints: false, foreignKey: 'unblockedByAdminId' })
], UserBlackList.prototype, "unblockedByAdmin", void 0);
UserBlackList = __decorate([
    sequelize_typescript_1.Table
], UserBlackList);
exports.UserBlackList = UserBlackList;
