"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumCommentMedia = void 0;
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
const ForumComment_1 = require("./ForumComment");
const sequelize_typescript_1 = require("sequelize-typescript");
let ForumCommentMedia = class ForumCommentMedia extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ForumCommentMedia.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumCommentMedia.prototype, "mediaId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ForumComment_1.ForumComment),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumCommentMedia.prototype, "commentId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media)
], ForumCommentMedia.prototype, "media", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ForumComment_1.ForumComment)
], ForumCommentMedia.prototype, "comment", void 0);
ForumCommentMedia = __decorate([
    sequelize_typescript_1.Table
], ForumCommentMedia);
exports.ForumCommentMedia = ForumCommentMedia;
