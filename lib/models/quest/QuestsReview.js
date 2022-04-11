"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../user/User");
const Quest_1 = require("./Quest");
const utils_1 = require("../../utils");
let QuestsReview = class QuestsReview extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestsReview.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestsReview.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestsReview.prototype, "fromUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestsReview.prototype, "toUserId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: null })
], QuestsReview.prototype, "message", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestsReview.prototype, "mark", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'fromUserId')
], QuestsReview.prototype, "fromUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'toUserId')
], QuestsReview.prototype, "toUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, 'questId')
], QuestsReview.prototype, "quest", void 0);
QuestsReview = __decorate([
    sequelize_typescript_1.Table
], QuestsReview);
exports.QuestsReview = QuestsReview;
