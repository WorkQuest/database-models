"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileVisibilitySetting = exports.NetworkProfileVisibility = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("./User");
const types_1 = require("../types");
var NetworkProfileVisibility;
(function (NetworkProfileVisibility) {
    NetworkProfileVisibility[NetworkProfileVisibility["AllUsers"] = 0] = "AllUsers";
    NetworkProfileVisibility[NetworkProfileVisibility["SubmittingOffer"] = 1] = "SubmittingOffer";
})(NetworkProfileVisibility = exports.NetworkProfileVisibility || (exports.NetworkProfileVisibility = {}));
let ProfileVisibilitySetting = class ProfileVisibilitySetting extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], ProfileVisibilitySetting.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ProfileVisibilitySetting.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: NetworkProfileVisibility.AllUsers })
], ProfileVisibilitySetting.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.RatingStatus.AllStatuses })
], ProfileVisibilitySetting.prototype, "ratingStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], ProfileVisibilitySetting.prototype, "user", void 0);
ProfileVisibilitySetting = __decorate([
    sequelize_typescript_1.Table
], ProfileVisibilitySetting);
exports.ProfileVisibilitySetting = ProfileVisibilitySetting;
