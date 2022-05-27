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
const Admin_1 = require("../admin/Admin");
const utils_1 = require("../../utils");
const QuestDispute_1 = require("./QuestDispute");
let QuestDisputeReview = class QuestDisputeReview extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestDisputeReview.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => QuestDispute_1.QuestDispute),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDisputeReview.prototype, "disputeId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDisputeReview.prototype, "fromUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], QuestDisputeReview.prototype, "toAdminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: null })
], QuestDisputeReview.prototype, "message", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], QuestDisputeReview.prototype, "mark", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'fromUserId')
], QuestDisputeReview.prototype, "fromUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin, 'toAdminId')
], QuestDisputeReview.prototype, "toAdmin", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => QuestDispute_1.QuestDispute, 'disputeId')
], QuestDisputeReview.prototype, "dispute", void 0);
QuestDisputeReview = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'fromUser'
                }, {
                    model: Admin_1.Admin,
                    as: 'toAdmin'
                }, {
                    model: QuestDispute_1.QuestDispute,
                    as: 'dispute'
                }]
        }
    })),
    sequelize_typescript_1.Table
], QuestDisputeReview);
exports.QuestDisputeReview = QuestDisputeReview;
