"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAdmin = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../user/User");
const Admin_1 = require("../admin/Admin");
const Quest_1 = require("./Quest");
const utils_1 = require("../../utils");
let ReviewAdmin = class ReviewAdmin extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ReviewAdmin.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: true })
], ReviewAdmin.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReviewAdmin.prototype, "fromUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReviewAdmin.prototype, "toAdminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: null })
], ReviewAdmin.prototype, "message", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], ReviewAdmin.prototype, "mark", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'fromUserId')
], ReviewAdmin.prototype, "fromUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin, 'toAdminId')
], ReviewAdmin.prototype, "toUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, 'questId')
], ReviewAdmin.prototype, "quest", void 0);
ReviewAdmin = __decorate([
    sequelize_typescript_1.Table
], ReviewAdmin);
exports.ReviewAdmin = ReviewAdmin;
