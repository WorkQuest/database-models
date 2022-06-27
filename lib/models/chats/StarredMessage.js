"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarredMessage = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Message_1 = require("./Message");
const User_1 = require("../user/User");
const Admin_1 = require("../admin/Admin");
let StarredMessage = class StarredMessage extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], StarredMessage.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], StarredMessage.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], StarredMessage.prototype, "adminId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Message_1.Message),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], StarredMessage.prototype, "messageId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], StarredMessage.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin)
], StarredMessage.prototype, "admin", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Message_1.Message, { constraints: false })
], StarredMessage.prototype, "message", void 0);
StarredMessage = __decorate([
    sequelize_typescript_1.Table
], StarredMessage);
exports.StarredMessage = StarredMessage;
