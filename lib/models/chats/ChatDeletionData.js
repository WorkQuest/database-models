"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatDeletionData = void 0;
const Message_1 = require("./Message");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const sequelize_typescript_1 = require("sequelize-typescript");
let ChatDeletionData = class ChatDeletionData extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)(), unique: true })
], ChatDeletionData.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatDeletionData.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Message_1.Message),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ChatDeletionData.prototype, "beforeDeletionMessageId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], ChatDeletionData.prototype, "beforeDeletionMessageNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], ChatDeletionData.prototype, "chatMember", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Message_1.Message)
], ChatDeletionData.prototype, "beforeDeletionMessage", void 0);
ChatDeletionData = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            attributes: {
                exclude: []
            },
            include: [{
                    model: Message_1.Message,
                    as: 'beforeDeletionMessage'
                }]
        },
    })),
    sequelize_typescript_1.Table
], ChatDeletionData);
exports.ChatDeletionData = ChatDeletionData;
