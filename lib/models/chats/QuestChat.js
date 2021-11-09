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
const QuestsResponse_1 = require("../quest/QuestsResponse");
const Chat_1 = require("./Chat");
const User_1 = require("../user/User");
var QuestChatStatuses;
(function (QuestChatStatuses) {
    QuestChatStatuses[QuestChatStatuses["open"] = 0] = "open";
    QuestChatStatuses[QuestChatStatuses["close"] = 1] = "close";
})(QuestChatStatuses = exports.QuestChatStatuses || (exports.QuestChatStatuses = {}));
let QuestChat = class QuestChat extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], QuestChat.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "employerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "workerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => QuestsResponse_1.QuestsResponse),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "responseId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Chat_1.Chat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestChat.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: QuestChatStatuses.open })
], QuestChat.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest)
], QuestChat.prototype, "quest", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => QuestsResponse_1.QuestsResponse)
], QuestChat.prototype, "response", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chat_1.Chat)
], QuestChat.prototype, "chat", void 0);
QuestChat = __decorate([
    sequelize_typescript_1.Table
], QuestChat);
exports.QuestChat = QuestChat;
