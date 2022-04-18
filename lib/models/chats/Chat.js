"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = exports.ChatType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Message_1 = require("./Message");
const ChatMember_1 = require("./ChatMember");
const StarredChat_1 = require("./StarredChat");
const utils_1 = require("../../utils");
const QuestChat_1 = require("./QuestChat");
const GroupChat_1 = require("./GroupChat");
const ChatData_1 = require("./ChatData");
var ChatType;
(function (ChatType) {
    ChatType["private"] = "private";
    ChatType["group"] = "group";
    ChatType["quest"] = "quest";
})(ChatType = exports.ChatType || (exports.ChatType = {}));
let Chat = class Chat extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)(), unique: true })
], Chat.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Chat.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Message_1.Message)
], Chat.prototype, "messages", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ChatMember_1.ChatMember)
], Chat.prototype, "members", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatMember_1.ChatMember)
], Chat.prototype, "meMember", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestChat_1.QuestChat)
], Chat.prototype, "questChat", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => GroupChat_1.GroupChat)
], Chat.prototype, "groupChat", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatData_1.ChatData)
], Chat.prototype, "chatData", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => StarredChat_1.StarredChat)
], Chat.prototype, "star", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatMember_1.ChatMember)
], Chat.prototype, "firstMemberInPrivateChat", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatMember_1.ChatMember)
], Chat.prototype, "secondMemberInPrivateChat", void 0);
Chat = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            attributes: {
                exclude: ["messages", "updatedAt"]
            },
            include: [{
                    model: QuestChat_1.QuestChat,
                    as: 'questChat',
                }, {
                    model: GroupChat_1.GroupChat,
                    as: 'groupChat'
                }]
        }
    })),
    sequelize_typescript_1.Table
], Chat);
exports.Chat = Chat;
