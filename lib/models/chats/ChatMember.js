"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMember = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const Chat_1 = require("./Chat");
let ChatMember = class ChatMember extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), unique: true })
], ChatMember.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Chat_1.Chat),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatMember.prototype, "chatId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatMember.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED, defaultValue: 0 })
], ChatMember.prototype, "unreadCountMessages", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ChatMember.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chat_1.Chat)
], ChatMember.prototype, "chat", void 0);
ChatMember = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        userOnly: {
            attributes: {
                exclude: ['id', 'chatId', 'createdAt', 'updatedAt']
            },
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'user'
                }]
        },
        userIdsOnly: {
            attributes: {
                exclude: [
                    'id',
                    'chatId',
                    'createdAt',
                    'updatedAt',
                    'unreadCountMessages',
                ]
            },
        }
    })),
    sequelize_typescript_1.Table
], ChatMember);
exports.ChatMember = ChatMember;