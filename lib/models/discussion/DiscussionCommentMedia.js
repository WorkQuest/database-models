"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
const DiscussionComment_1 = require("./DiscussionComment");
const sequelize_typescript_1 = require("sequelize-typescript");
let DiscussionCommentMedia = class DiscussionCommentMedia extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], DiscussionCommentMedia.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Media_1.Media),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionCommentMedia.prototype, "mediaId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => DiscussionComment_1.DiscussionComment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionCommentMedia.prototype, "commentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Media_1.Media)
], DiscussionCommentMedia.prototype, "media", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => DiscussionComment_1.DiscussionComment)
], DiscussionCommentMedia.prototype, "comment", void 0);
DiscussionCommentMedia = __decorate([
    sequelize_typescript_1.Table
], DiscussionCommentMedia);
exports.DiscussionCommentMedia = DiscussionCommentMedia;
