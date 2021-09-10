"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = exports.ChatType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Message_1 = require("./Message");
const ChatMember_1 = require("./ChatMember");
const User_1 = require("../User");
const utils_1 = require("../../utils");
const errors_1 = require("../../utils/errors");
var ChatType;
(function (ChatType) {
    ChatType["private"] = "private";
    ChatType["group"] = "group";
})(ChatType = exports.ChatType || (exports.ChatType = {}));
let Chat = class Chat extends sequelize_typescript_1.Model {
    mustHaveMember(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield ChatMember_1.ChatMember.findOne({
                where: { chatId: this.id, userId }
            });
            if (!member) {
                throw utils_1.error(errors_1.Errors.Forbidden, "User is not a member of this chat", {});
            }
        });
    }
    mustHaveType(type) {
        if (this.type !== type) {
            throw utils_1.error(errors_1.Errors.InvalidType, "Type does not match", {});
        }
    }
    mustHaveOwner(userId) {
        if (this.ownerUserId !== userId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "User is not a owner in this chat", {});
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], Chat.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Chat.prototype, "ownerUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Message_1.Message),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Chat.prototype, "lastMessageId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Chat.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Chat.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: null })
], Chat.prototype, "lastMessageDate", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => ChatMember_1.ChatMember)
], Chat.prototype, "members", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Chat.prototype, "owner", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Message_1.Message, { foreignKey: 'lastMessageId', constraints: false })
], Chat.prototype, "lastMessage", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Message_1.Message)
], Chat.prototype, "messages", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ChatMember_1.ChatMember)
], Chat.prototype, "chatMembers", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => ChatMember_1.ChatMember)
], Chat.prototype, "firstMemberInPrivateChat", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => ChatMember_1.ChatMember)
], Chat.prototype, "secondMemberInPrivateChat", void 0);
Chat = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["messages", "updatedAt"]
            },
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'owner'
                }, {
                    model: Message_1.Message,
                    as: 'lastMessage'
                }, {
                    model: User_1.User.scope('short'),
                    as: 'members',
                    through: {
                        attributes: []
                    }
                }]
        }
    })),
    sequelize_typescript_1.Table
], Chat);
exports.Chat = Chat;
