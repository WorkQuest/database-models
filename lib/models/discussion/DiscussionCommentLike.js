"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const DiscussionComment_1 = require("./DiscussionComment");
const sequelize_typescript_1 = require("sequelize-typescript");
let DiscussionCommentLike = class DiscussionCommentLike extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], DiscussionCommentLike.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => DiscussionComment_1.DiscussionComment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionCommentLike.prototype, "commentId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionCommentLike.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], DiscussionCommentLike.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => DiscussionComment_1.DiscussionComment)
], DiscussionCommentLike.prototype, "likeComment", void 0);
DiscussionCommentLike = __decorate([
    sequelize_typescript_1.Table
], DiscussionCommentLike);
exports.DiscussionCommentLike = DiscussionCommentLike;
