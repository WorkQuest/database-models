"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const Media_1 = require("./Media");
const Quest_1 = require("./Quest");
let QuestMedia = class QuestMedia extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() }),
    __metadata("design:type", String)
], QuestMedia.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], QuestMedia.prototype, "mediaId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], QuestMedia.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media),
    __metadata("design:type", Media_1.Media)
], QuestMedia.prototype, "media", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest),
    __metadata("design:type", Quest_1.Quest)
], QuestMedia.prototype, "quest", void 0);
QuestMedia = __decorate([
    sequelize_typescript_1.Table
], QuestMedia);
exports.QuestMedia = QuestMedia;
//# sourceMappingURL=QuestMedia.js.map