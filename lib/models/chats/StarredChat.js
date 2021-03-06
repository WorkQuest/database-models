"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarredChat = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Chat_1 = require("./Chat");
const User_1 = require("../user/User");
const Admin_1 = require("../admin/Admin");
let StarredChat = class StarredChat extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], StarredChat.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], StarredChat.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], StarredChat.prototype, "adminId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Chat_1.Chat),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], StarredChat.prototype, "chatId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], StarredChat.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin)
], StarredChat.prototype, "admin", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Chat_1.Chat, { constraints: false })
], StarredChat.prototype, "chat", void 0);
StarredChat = __decorate([
    sequelize_typescript_1.Table
], StarredChat);
exports.StarredChat = StarredChat;
