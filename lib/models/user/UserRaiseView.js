"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRaiseView = exports.UserRaiseType = exports.UserRaiseDuration = exports.UserRaiseStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("./User");
var UserRaiseStatus;
(function (UserRaiseStatus) {
    UserRaiseStatus[UserRaiseStatus["Paid"] = 0] = "Paid";
    UserRaiseStatus[UserRaiseStatus["Unpaid"] = 1] = "Unpaid";
    UserRaiseStatus[UserRaiseStatus["Closed"] = 2] = "Closed";
})(UserRaiseStatus = exports.UserRaiseStatus || (exports.UserRaiseStatus = {}));
var UserRaiseDuration;
(function (UserRaiseDuration) {
    UserRaiseDuration[UserRaiseDuration["OneDay"] = 1] = "OneDay";
    UserRaiseDuration[UserRaiseDuration["SevenDays"] = 7] = "SevenDays";
    UserRaiseDuration[UserRaiseDuration["ThirtyOneDays"] = 31] = "ThirtyOneDays";
})(UserRaiseDuration = exports.UserRaiseDuration || (exports.UserRaiseDuration = {}));
var UserRaiseType;
(function (UserRaiseType) {
    UserRaiseType[UserRaiseType["GoldPlus"] = 0] = "GoldPlus";
    UserRaiseType[UserRaiseType["Gold"] = 1] = "Gold";
    UserRaiseType[UserRaiseType["Silver"] = 2] = "Silver";
    UserRaiseType[UserRaiseType["Bronze"] = 3] = "Bronze";
})(UserRaiseType = exports.UserRaiseType || (exports.UserRaiseType = {}));
let UserRaiseView = class UserRaiseView extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], UserRaiseView.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], UserRaiseView.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: UserRaiseStatus.Unpaid })
], UserRaiseView.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], UserRaiseView.prototype, "duration", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], UserRaiseView.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], UserRaiseView.prototype, "user", void 0);
UserRaiseView = __decorate([
    sequelize_typescript_1.Table
], UserRaiseView);
exports.UserRaiseView = UserRaiseView;
