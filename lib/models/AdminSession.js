"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const Admin_1 = require("./Admin");
const defaultAdminLoginPlace = {
    country: null,
    city: null,
};
let AdminSession = class AdminSession extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], AdminSession.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin), sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], AdminSession.prototype, "adminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: defaultAdminLoginPlace })
], AdminSession.prototype, "place", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], AdminSession.prototype, "device", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true })
], AdminSession.prototype, "isActive", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], AdminSession.prototype, "logoutAt", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], AdminSession.prototype, "lastActionTime", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], AdminSession.prototype, "admin", void 0);
AdminSession = __decorate([
    sequelize_typescript_1.Table
], AdminSession);
exports.AdminSession = AdminSession;
