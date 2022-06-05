"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportTicketForUser = exports.PostedDecision = exports.TicketStatus = void 0;
const User_1 = require("../user/User");
const utils_1 = require("../../utils");
const Admin_1 = require("../admin/Admin");
const sequelize_typescript_1 = require("sequelize-typescript");
var TicketStatus;
(function (TicketStatus) {
    TicketStatus[TicketStatus["Rejected"] = -1] = "Rejected";
    TicketStatus[TicketStatus["Pending"] = 0] = "Pending";
    TicketStatus[TicketStatus["Decided"] = 1] = "Decided";
})(TicketStatus = exports.TicketStatus || (exports.TicketStatus = {}));
var PostedDecision;
(function (PostedDecision) {
    PostedDecision["OnEmailWithTheAuthor"] = "OnEmailWithTheAuthor";
    PostedDecision["OnPrivateMessageWithAuthor"] = "OnPrivateMessageWithAuthor";
})(PostedDecision = exports.PostedDecision || (exports.PostedDecision = {}));
let SupportTicketForUser = class SupportTicketForUser extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, defaultValue: () => (0, utils_1.getUUID)() })
], SupportTicketForUser.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, allowNull: false })
], SupportTicketForUser.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SupportTicketForUser.prototype, "authorUserId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], SupportTicketForUser.prototype, "resolvedByAdminId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], SupportTicketForUser.prototype, "replyToMail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SupportTicketForUser.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], SupportTicketForUser.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.SMALLINT, allowNull: false })
], SupportTicketForUser.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], SupportTicketForUser.prototype, "decisionPostedIn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })
], SupportTicketForUser.prototype, "decisionDescription", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], SupportTicketForUser.prototype, "acceptedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], SupportTicketForUser.prototype, "completedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], SupportTicketForUser.prototype, "authorUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin)
], SupportTicketForUser.prototype, "resolvedByAdmin", void 0);
SupportTicketForUser = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            attributes: {
                exclude: ["createdAt"]
            },
            short: {
                attributes: [
                    "title",
                    "number",
                    "status",
                    "authorUserId",
                ],
                include: [{
                        model: Admin_1.Admin.scope('short'),
                        as: "resolvedByAdmin",
                    }, {
                        model: User_1.User.scope('short'),
                        as: "authorUser",
                    }],
            }
        }
    })),
    sequelize_typescript_1.Table
], SupportTicketForUser);
exports.SupportTicketForUser = SupportTicketForUser;
