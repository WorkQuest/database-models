"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Message_1 = require("./Message");
const utils_1 = require("../../utils");
const Chat_1 = require("./Chat");
let ChatData = class ChatData extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)(), unique: true })
], ChatData.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Chat_1.Chat),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatData.prototype, "chatId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Message_1.Message),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], ChatData.prototype, "lastMessageId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Message_1.Message, { foreignKey: 'lastMessageId', constraints: false })
], ChatData.prototype, "lastMessage", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Chat_1.Chat)
], ChatData.prototype, "chat", void 0);
ChatData = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        forChatsList: {
            attributes: {
                exclude: ['id', 'chatId', "createdAt", "updatedAt"],
            },
            include: [{
                    model: Message_1.Message,
                    as: 'lastMessage',
                }],
        },
        forChat: {
            attributes: {
                exclude: ['id', 'chatId', "createdAt", "updatedAt"],
            },
            include: [{
                    model: Message_1.Message,
                    as: 'lastMessage',
                }],
        },
        forChatListWithoutMessage: {
            attributes: ["chatId", "lastMessageId", "createdAt"],
        }
    })),
    sequelize_typescript_1.Table
], ChatData);
exports.ChatData = ChatData;
