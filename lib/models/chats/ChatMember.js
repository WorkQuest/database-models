"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMember = exports.MemberStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const Chat_1 = require("./Chat");
const Admin_1 = require("../admin/Admin");
const ChatMemberDeletionData_1 = require("./ChatMemberDeletionData");
const ChatMemberData_1 = require("./ChatMemberData");
const ChatDeletionData_1 = require("./ChatDeletionData");
const Media_1 = require("../Media");
var MemberStatus;
(function (MemberStatus) {
    MemberStatus[MemberStatus["Deleted"] = -1] = "Deleted";
    MemberStatus[MemberStatus["Active"] = 0] = "Active";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));
let ChatMember = class ChatMember extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)(), unique: true })
], ChatMember.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Chat_1.Chat),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatMember.prototype, "chatId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ChatMember.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ChatMember.prototype, "adminId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatMember.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: MemberStatus.Active })
], ChatMember.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], ChatMember.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin)
], ChatMember.prototype, "admin", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Chat_1.Chat)
], ChatMember.prototype, "chat", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatMemberData_1.ChatMemberData)
], ChatMember.prototype, "chatMemberData", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatDeletionData_1.ChatDeletionData)
], ChatMember.prototype, "chatDeletionData", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ChatMemberDeletionData_1.ChatMemberDeletionData)
], ChatMember.prototype, "deletionData", void 0);
ChatMember = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        forChatsList: {
            attributes: [
                'id',
                'type',
                'status',
                'userId',
                'chatId',
                'adminId',
            ],
            include: [{
                    model: User_1.User.unscoped(),
                    as: 'user',
                    attributes: ["id", "firstName", "lastName"],
                    include: [{
                            model: Media_1.Media.scope('urlOnly'),
                            as: 'avatar'
                        }],
                }, {
                    model: Admin_1.Admin.unscoped(),
                    as: 'admin',
                    attributes: ["id", "firstName", "lastName"],
                }],
        },
        forGetChat: {
            attributes: [
                'id',
                'userId',
                'chatId',
                'adminId',
                'type',
                'status',
                'createdAt',
            ],
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'user',
                }, {
                    model: Admin_1.Admin.scope('short'),
                    as: 'admin',
                }, {
                    model: ChatMemberDeletionData_1.ChatMemberDeletionData,
                    as: 'deletionData',
                }],
        },
        userOnly: {
            attributes: [
                'id',
                'type',
                'status',
                'userId',
                'chatId',
                'adminId',
            ],
            include: [{
                    model: User_1.User.unscoped(),
                    as: 'user',
                    attributes: ["id", "firstName", "lastName"],
                    include: [{
                            model: Media_1.Media.scope('urlOnly'),
                            as: 'avatar'
                        }],
                }],
        },
    })),
    sequelize_typescript_1.Table
], ChatMember);
exports.ChatMember = ChatMember;
