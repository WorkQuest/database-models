"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionLike = void 0;
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const Discussion_1 = require("./Discussion");
const sequelize_typescript_1 = require("sequelize-typescript");
let DiscussionLike = class DiscussionLike extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], DiscussionLike.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Discussion_1.Discussion),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionLike.prototype, "discussionId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionLike.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], DiscussionLike.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Discussion_1.Discussion)
], DiscussionLike.prototype, "discussion", void 0);
DiscussionLike = __decorate([
    sequelize_typescript_1.Table
], DiscussionLike);
exports.DiscussionLike = DiscussionLike;
