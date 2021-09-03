"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Message_1 = require("./Message");
const AdminChatMember_1 = require("./AdminChatMember");
const utils_1 = require("../../utils");
const errors_1 = require("../../utils/errors");
const Admin_1 = require("../Admin");
var ChatType;
(function (ChatType) {
    ChatType[ChatType["private"] = 0] = "private";
    ChatType[ChatType["group"] = 1] = "group";
})(ChatType = exports.ChatType || (exports.ChatType = {}));
let AdminChat = class AdminChat extends sequelize_typescript_1.Model {
    mustHaveMember(adminId) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield AdminChatMember_1.AdminChatMember.findOne({
                where: { chatId: this.id, adminId }
            });
            if (!member) {
                throw utils_1.error(errors_1.Errors.Forbidden, "Admin is not a member of this chat", {});
            }
        });
    }
    mustHaveType(type) {
        if (this.type !== type) {
            throw utils_1.error(errors_1.Errors.InvalidType, "Type does not match", {});
        }
    }
    mustHaveOwner(adminId) {
        if (this.ownerAdminId !== adminId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "Admin is not a owner in this chat", {});
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], AdminChat.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], AdminChat.prototype, "ownerAdminId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Message_1.Message),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], AdminChat.prototype, "lastMessageId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], AdminChat.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], AdminChat.prototype, "lastMessageDate", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], AdminChat.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Admin_1.Admin, () => AdminChatMember_1.AdminChatMember)
], AdminChat.prototype, "members", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], AdminChat.prototype, "owner", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Message_1.Message, { foreignKey: 'lastMessageId', constraints: false })
], AdminChat.prototype, "lastMessage", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Message_1.Message)
], AdminChat.prototype, "messages", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => AdminChatMember_1.AdminChatMember)
], AdminChat.prototype, "adminChatMember", void 0);
AdminChat = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["messages", "updatedAt"]
            },
            include: [{
                    model: Admin_1.Admin.scope('short'),
                    as: 'owner'
                }]
        }
    })),
    sequelize_typescript_1.Table
], AdminChat);
exports.AdminChat = AdminChat;
