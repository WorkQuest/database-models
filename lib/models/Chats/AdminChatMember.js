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
const Admin_1 = require("../Admin");
const AdminChat_1 = require("./AdminChat");
let AdminChatMember = class AdminChatMember extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], AdminChatMember.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => AdminChat_1.AdminChat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminChatMember.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminChatMember.prototype, "adminId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], AdminChatMember.prototype, "admin", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => AdminChat_1.AdminChat)
], AdminChatMember.prototype, "chat", void 0);
AdminChatMember = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        adminOnly: {
            attributes: {
                exclude: ['id', 'chatId', 'createdAt', 'updatedAt']
            },
            include: [{
                    model: Admin_1.Admin,
                    as: 'admin'
                }]
        }
    })),
    sequelize_typescript_1.Table
], AdminChatMember);
exports.AdminChatMember = AdminChatMember;
