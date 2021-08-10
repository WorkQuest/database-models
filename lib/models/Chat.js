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
const User_1 = require("./User");
const utils_1 = require("../utils");
const errors_1 = require("../utils/errors");
var ChatType;
(function (ChatType) {
    ChatType[ChatType["private"] = 0] = "private";
    ChatType[ChatType["group"] = 1] = "group";
})(ChatType = exports.ChatType || (exports.ChatType = {}));
let Chat = class Chat extends sequelize_typescript_1.Model {
    mustHaveMember(userId) {
        if (this.members.some(user => user.id === userId)) {
            throw utils_1.error(errors_1.Errors.Forbidden, "User is not a member of this chat", {});
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], Chat.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Chat.prototype, "creatorUserId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], Chat.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => ChatMember_1.ChatMember)
], Chat.prototype, "members", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Chat.prototype, "creator", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Message_1.Message)
], Chat.prototype, "message", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => ChatMember_1.ChatMember)
], Chat.prototype, "member", void 0);
Chat = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["message"]
            },
            include: [{
                    model: User_1.User,
                    as: 'members',
                    through: {
                        attributes: []
                    }
                }, {
                    model: User_1.User,
                    as: 'creator'
                }]
        }
    })),
    sequelize_typescript_1.Table
], Chat);
exports.Chat = Chat;
