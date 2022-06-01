"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoMessage = exports.MessageAction = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Message_1 = require("./Message");
const ChatMember_1 = require("./ChatMember");
var MessageAction;
(function (MessageAction) {
    MessageAction["GroupChatCreate"] = "GroupChatCreate";
    MessageAction["GroupChatAddMember"] = "GroupChatAddMember";
    MessageAction["GroupChatMemberRestored"] = "GroupChatMemberRestored";
    MessageAction["GroupChatDeleteMember"] = "GroupChatDeleteMember";
    MessageAction["GroupChatLeaveMember"] = "GroupChatLeaveMember";
    MessageAction["WorkerResponseOnQuest"] = "WorkerResponseOnQuest";
    MessageAction["EmployerRejectResponseOnQuest"] = "EmployerRejectResponseOnQuest";
    MessageAction["EmployerInviteOnQuest"] = "EmployerInviteOnQuest";
    MessageAction["WorkerRejectInviteOnQuest"] = "WorkerRejectInviteOnQuest";
    MessageAction["WorkerAcceptInviteOnQuest"] = "WorkerAcceptInviteOnQuest";
})(MessageAction = exports.MessageAction || (exports.MessageAction = {}));
let InfoMessage = class InfoMessage extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)(), unique: true })
], InfoMessage.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Message_1.Message),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], InfoMessage.prototype, "messageId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ChatMember_1.ChatMember),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], InfoMessage.prototype, "memberId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], InfoMessage.prototype, "messageAction", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ChatMember_1.ChatMember)
], InfoMessage.prototype, "member", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Message_1.Message)
], InfoMessage.prototype, "message", void 0);
InfoMessage = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [{
                    model: ChatMember_1.ChatMember,
                    as: 'member',
                }],
        }
    })),
    sequelize_typescript_1.Table
], InfoMessage);
exports.InfoMessage = InfoMessage;
