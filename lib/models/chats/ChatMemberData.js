"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Message_1 = require("./Message");
const ChatMember_1 = require("./ChatMember");
const utils_1 = require("../../utils");
let ChatMemberData = class ChatMemberData extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], ChatMemberData.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ChatMember_1.ChatMember),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatMemberData.prototype, "chatMemberId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Message_1.Message),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, })
], ChatMemberData.prototype, "lastReadMessageId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], ChatMemberData.prototype, "unreadCountMessages", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, })
], ChatMemberData.prototype, "lastReadMessageNumber", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Message_1.Message)
], ChatMemberData.prototype, "lastReadMessage", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ChatMember_1.ChatMember)
], ChatMemberData.prototype, "chatMember", void 0);
ChatMemberData = __decorate([
    sequelize_typescript_1.Table
], ChatMemberData);
exports.ChatMemberData = ChatMemberData;
