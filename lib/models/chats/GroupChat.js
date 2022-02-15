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
const Quest_1 = require("../quest/Quest");
const Chat_1 = require("./Chat");
const ChatMember_1 = require("./ChatMember");
let QuestChat = class QuestChat extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], QuestChat.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ChatMember_1.ChatMember),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "ownerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Chat_1.Chat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chat_1.Chat)
], QuestChat.prototype, "chat", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ChatMember_1.ChatMember, 'ownerId')
], QuestChat.prototype, "owner", void 0);
QuestChat = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [{
                    model: Quest_1.Quest,
                    as: 'quest',
                    attributes: ["title"]
                }]
        },
        idsOnly: {
            attributes: ['employerId', 'workerId', 'questId', 'responseId', 'chatId']
        }
    })),
    sequelize_typescript_1.Table
], QuestChat);
exports.QuestChat = QuestChat;
