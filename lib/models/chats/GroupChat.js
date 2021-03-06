"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupChat = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Chat_1 = require("./Chat");
const ChatMember_1 = require("./ChatMember");
let GroupChat = class GroupChat extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)(), unique: true })
], GroupChat.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], GroupChat.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ChatMember_1.ChatMember),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], GroupChat.prototype, "ownerMemberId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Chat_1.Chat),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], GroupChat.prototype, "chatId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Chat_1.Chat)
], GroupChat.prototype, "chat", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ChatMember_1.ChatMember, 'ownerMemberId')
], GroupChat.prototype, "ownerMember", void 0);
GroupChat = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        forChatsList: {
            attributes: {
                exclude: ['id', 'chatId', 'createdAt', 'updatedAt'],
            },
            include: [{
                    model: ChatMember_1.ChatMember,
                    as: 'ownerMember',
                }],
        },
        forChat: {
            attributes: {
                exclude: ['id', 'chatId', 'updatedAt', 'createdAt'],
            },
            include: [{
                    model: ChatMember_1.ChatMember,
                    as: 'ownerMember'
                }],
        },
    })),
    sequelize_typescript_1.Table
], GroupChat);
exports.GroupChat = GroupChat;
