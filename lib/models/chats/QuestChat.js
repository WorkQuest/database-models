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
const Admin_1 = require("../admin/Admin");
var QuestChatStatus;
(function (QuestChatStatus) {
    QuestChatStatus[QuestChatStatus["Close"] = -1] = "Close";
    QuestChatStatus[QuestChatStatus["Open"] = 0] = "Open";
})(QuestChatStatus = exports.QuestChatStatus || (exports.QuestChatStatus = {}));
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
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestChat.prototype, "disputeAdminId", void 0);
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
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestChatStatus.Open })
], QuestChat.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chat_1.Chat)
], QuestChat.prototype, "chat", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest)
], QuestChat.prototype, "quest", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => QuestsResponse_1.QuestsResponse)
], QuestChat.prototype, "response", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'workerId')
], QuestChat.prototype, "worker", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'employerId')
], QuestChat.prototype, "employer", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin, 'disputeAdminId')
], QuestChat.prototype, "disputeAdmin", void 0);
QuestChat = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        forChatsList: {
            attributes: {
                exclude: ['id', 'chatId', 'createdAt', 'updatedAt'],
            },
            include: [{
                    model: Quest_1.Quest.unscoped(),
                    as: 'quest',
                    attributes: [
                        'id',
                        'title',
                        'status',
                    ],
                }, {
                    model: QuestsResponse_1.QuestsResponse.unscoped(),
                    as: "response",
                    attributes: [
                        "id",
                        "workerId",
                        "questId",
                        "type",
                        "status",
                    ],
                }, {
                    model: User_1.User.scope('short'),
                    as: 'worker',
                }, {
                    model: User_1.User.scope('short'),
                    as: 'employer',
                }, {
                    model: Admin_1.Admin.scope('short'),
                    as: 'admin',
                }],
        },
        forQuestChat: {
            attributes: {
                exclude: ['id', 'chatId', 'createdAt', 'updatedAt'],
            },
            include: [{
                    model: Quest_1.Quest.unscoped(),
                    as: 'quest',
                    attributes: [
                        'id',
                        'userId',
                        'assignedWorkerId',
                        'nonce',
                        'status',
                    ],
                }, {
                    model: QuestsResponse_1.QuestsResponse.unscoped(),
                    as: "response",
                    attributes: [
                        "id",
                        "workerId",
                        "questId",
                        "type",
                        "status",
                    ],
                }, {
                    model: User_1.User.scope('short'),
                    as: 'worker',
                }, {
                    model: User_1.User.scope('short'),
                    as: 'employer',
                }, {
                    model: Admin_1.Admin.scope('short'),
                    as: 'admin',
                }],
        }
    })),
    sequelize_typescript_1.Table
], QuestChat);
exports.QuestChat = QuestChat;
