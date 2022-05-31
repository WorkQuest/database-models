"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const DiscussionComment_1 = require("../discussion/DiscussionComment");
const Quest_1 = require("../quest/Quest");
const User_1 = require("../user/User");
const ReportMedia_1 = require("./ReportMedia");
const Admin_1 = require("../admin/Admin");
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
var ReportStatus;
(function (ReportStatus) {
    ReportStatus[ReportStatus["Rejected"] = -1] = "Rejected";
    ReportStatus[ReportStatus["Created"] = 0] = "Created";
    ReportStatus[ReportStatus["Decided"] = 1] = "Decided";
})(ReportStatus = exports.ReportStatus || (exports.ReportStatus = {}));
var ReportEntityType;
(function (ReportEntityType) {
    ReportEntityType["User"] = "User";
    ReportEntityType["Quest"] = "Quest";
    ReportEntityType["Comment"] = "Comment";
})(ReportEntityType = exports.ReportEntityType || (exports.ReportEntityType = {}));
exports.reportEntities = {
    User: { entity: User_1.User, statuses: User_1.UserStatus },
    Quest: { entity: Quest_1.Quest, statuses: Quest_1.QuestStatus },
    Comment: { entity: DiscussionComment_1.DiscussionComment, statuses: DiscussionComment_1.DiscussionCommentStatus }
};
let Report = class Report extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true, defaultValue: () => utils_1.getUUID() })
], Report.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Report.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING })
], Report.prototype, "resolvedByAdminId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Report.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], Report.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.SMALLINT, defaultValue: ReportStatus.Created })
], Report.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Report.prototype, "entityType", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Report.prototype, "entityId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE })
], Report.prototype, "resolvedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Report.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], Report.prototype, "admin", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, {
        foreignKey: 'entityId',
        targetKey: 'id'
    })
], Report.prototype, "entityUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest, {
        foreignKey: 'entityId',
        targetKey: 'id'
    })
], Report.prototype, "entityQuest", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => DiscussionComment_1.DiscussionComment, {
        foreignKey: 'entityId',
        targetKey: 'id'
    })
], Report.prototype, "entityComment", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => ReportMedia_1.ReportMedia)
], Report.prototype, "medias", void 0);
Report = __decorate([
    sequelize_typescript_1.Table
], Report);
exports.Report = Report;
