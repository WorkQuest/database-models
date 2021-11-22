"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
const Discussion_1 = require("./Discussion");
let DiscussionMedia = class DiscussionMedia extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], DiscussionMedia.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionMedia.prototype, "mediaId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Discussion_1.Discussion),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionMedia.prototype, "discussionId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media)
], DiscussionMedia.prototype, "media", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Discussion_1.Discussion)
], DiscussionMedia.prototype, "discussion", void 0);
DiscussionMedia = __decorate([
    sequelize_typescript_1.Table
], DiscussionMedia);
exports.DiscussionMedia = DiscussionMedia;
