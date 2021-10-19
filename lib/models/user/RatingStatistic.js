"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingStatistic = exports.RatingStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("./User");
var RatingStatus;
(function (RatingStatus) {
    RatingStatus["noStatus"] = "noStatus";
    RatingStatus["verified"] = "verified";
    RatingStatus["reliable"] = "reliable";
    RatingStatus["topRanked"] = "topRanked";
})(RatingStatus = exports.RatingStatus || (exports.RatingStatus = {}));
let RatingStatistic = class RatingStatistic extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], RatingStatistic.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], RatingStatistic.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], RatingStatistic.prototype, "reviewCount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DOUBLE, defaultValue: null })
], RatingStatistic.prototype, "averageMark", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: RatingStatus.noStatus })
], RatingStatistic.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], RatingStatistic.prototype, "user", void 0);
RatingStatistic = __decorate([
    sequelize_typescript_1.Table
], RatingStatistic);
exports.RatingStatistic = RatingStatistic;
