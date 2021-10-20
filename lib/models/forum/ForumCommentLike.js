"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumCommentLike = void 0;
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const ForumComment_1 = require("./ForumComment");
const sequelize_typescript_1 = require("sequelize-typescript");
let ForumCommentLike = class ForumCommentLike extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ForumCommentLike.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ForumComment_1.ForumComment),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumCommentLike.prototype, "commentId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumCommentLike.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ForumCommentLike.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ForumComment_1.ForumComment)
], ForumCommentLike.prototype, "likeComment", void 0);
ForumCommentLike = __decorate([
    sequelize_typescript_1.Table
], ForumCommentLike);
exports.ForumCommentLike = ForumCommentLike;
