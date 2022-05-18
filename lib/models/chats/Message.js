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
const Chat_1 = require("./Chat");
const Media_1 = require("../Media");
const MessageMedia_1 = require("./MessageMedia");
const InfoMessage_1 = require("./InfoMessage");
const StarredMessage_1 = require("./StarredMessage");
const ChatMember_1 = require("./ChatMember");
var MessageType;
(function (MessageType) {
    MessageType["Info"] = "Info";
    MessageType["Message"] = "Message";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var SenderMessageStatus;
(function (SenderMessageStatus) {
    SenderMessageStatus["Unread"] = "Unread";
    SenderMessageStatus["Read"] = "Read";
})(SenderMessageStatus = exports.SenderMessageStatus || (exports.SenderMessageStatus = {}));
let Message = class Message extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], Message.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], Message.prototype, "number", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Chat_1.Chat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Message.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ChatMember_1.ChatMember),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Message.prototype, "senderMemberId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: SenderMessageStatus.Unread })
], Message.prototype, "senderStatus", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Message.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], Message.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => InfoMessage_1.InfoMessage)
], Message.prototype, "infoMessage", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => StarredMessage_1.StarredMessage)
], Message.prototype, "star", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => MessageMedia_1.MessageMedia)
], Message.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ChatMember_1.ChatMember, 'senderMemberId')
], Message.prototype, "sender", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chat_1.Chat)
], Message.prototype, "chat", void 0);
Message = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        forChatsList: {
            attributes: [
                'id',
                'senderMemberId',
                'text',
                'type',
                'sender',
            ],
            include: [{
                    model: ChatMember_1.ChatMember.scope('forChatsList'),
                    as: 'sender',
                }],
        },
        forChat: {
            attributes: [
                'id',
                'senderMemberId',
                'text',
                'type',
                'sender',
            ],
            include: [{
                    model: ChatMember_1.ChatMember.scope('forChat'),
                    as: 'sender',
                }],
        },
    })),
    sequelize_typescript_1.Table
], Message);
exports.Message = Message;
