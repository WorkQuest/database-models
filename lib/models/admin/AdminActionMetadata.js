"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminActionMetadata = void 0;
const utils_1 = require("../../utils");
const Admin_1 = require("./Admin");
const sequelize_typescript_1 = require("sequelize-typescript");
let AdminActionMetadata = class AdminActionMetadata extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], AdminActionMetadata.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminActionMetadata.prototype, "adminId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminActionMetadata.prototype, "path", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminActionMetadata.prototype, "HTTPVerb", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin)
], AdminActionMetadata.prototype, "admin", void 0);
AdminActionMetadata = __decorate([
    sequelize_typescript_1.Table
], AdminActionMetadata);
exports.AdminActionMetadata = AdminActionMetadata;
