"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const index_1 = require("../../utils/index");
const Media_1 = require("../Media");
const Report_1 = require("./Report");
let ReportMedia = class ReportMedia extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, defaultValue: () => index_1.getUUID() })
], ReportMedia.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReportMedia.prototype, "mediaId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Report_1.Report),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReportMedia.prototype, "reportId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media)
], ReportMedia.prototype, "media", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Report_1.Report)
], ReportMedia.prototype, "report", void 0);
ReportMedia = __decorate([
    sequelize_typescript_1.Table
], ReportMedia);
exports.ReportMedia = ReportMedia;
