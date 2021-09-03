"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.MessageType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const errors_1 = require("../../utils/errors");
const User_1 = require("../User");
const Chat_1 = require("./Chat");
const Media_1 = require("../Media");
const MessageMedia_1 = require("./MessageMedia");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["informational"] = 0] = "informational";
    MessageType[MessageType["common"] = 1] = "common";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
let Message = class Message extends sequelize_typescript_1.Model {
    mustBeSender(userId) {
        if (this.senderUserId !== userId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "User isn't sender of the message", {
                messageId: this.id,
            });
        }
    }
    adminMustBeSender(adminId) {
        if (this.senderUserId !== adminId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "Admin isn't sender of the message", {
                messageId: this.id,
            });
        }
    }
    mustBeChat(chatId) {
        if (this.chatId !== chatId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "This message not from this chat", {});
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], Message.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Message.prototype, "senderUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Chat_1.Chat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Message.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], Message.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], Message.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => MessageMedia_1.MessageMedia)
], Message.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Message.prototype, "sender", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chat_1.Chat)
], Message.prototype, "chat", void 0);
Message = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media,
                    as: 'medias',
                    through: {
                        attributes: []
                    }
                }, {
                    model: User_1.User.scope('short'),
                    as: 'sender'
                }]
        }
    })),
    sequelize_typescript_1.Table
], Message);
exports.Message = Message;
