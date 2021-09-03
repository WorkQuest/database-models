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
const errors_1 = require("../../utils/errors");
const Media_1 = require("../Media");
const MessageMedia_1 = require("./MessageMedia");
const Admin_1 = require("../Admin");
const AdminChat_1 = require("./AdminChat");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["informational"] = 0] = "informational";
    MessageType[MessageType["common"] = 1] = "common";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
let AdminMessage = class AdminMessage extends sequelize_typescript_1.Model {
    mustBeSender(adminId) {
        if (this.senderAdminId !== adminId) {
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
], AdminMessage.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminMessage.prototype, "senderAdminId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => AdminChat_1.AdminChat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminMessage.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], AdminMessage.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], AdminMessage.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => MessageMedia_1.MessageMedia)
], AdminMessage.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], AdminMessage.prototype, "adminSender", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => AdminChat_1.AdminChat)
], AdminMessage.prototype, "chat", void 0);
AdminMessage = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media,
                    as: 'medias',
                    through: {
                        attributes: []
                    }
                }]
        }
    })),
    sequelize_typescript_1.Table
], AdminMessage);
exports.AdminMessage = AdminMessage;
