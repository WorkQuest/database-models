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
const QuestsResponse_1 = require("./QuestsResponse");
let QuestResponseMedia = class QuestResponseMedia extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestResponseMedia.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestResponseMedia.prototype, "mediaId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => QuestsResponse_1.QuestsResponse), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestResponseMedia.prototype, "questResponseId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media)
], QuestResponseMedia.prototype, "media", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => QuestsResponse_1.QuestsResponse)
], QuestResponseMedia.prototype, "questResponse", void 0);
QuestResponseMedia = __decorate([
    sequelize_typescript_1.Table
], QuestResponseMedia);
exports.QuestResponseMedia = QuestResponseMedia;
