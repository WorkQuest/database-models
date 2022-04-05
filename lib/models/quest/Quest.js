"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const Media_1 = require("../Media");
const QuestMedia_1 = require("./QuestMedia");
const QuestsReview_1 = require("./QuestsReview");
const QuestsResponse_1 = require("./QuestsResponse");
const QuestsStarred_1 = require("./QuestsStarred");
const QuestChat_1 = require("../chats/QuestChat");
const QuestRaiseView_1 = require("./QuestRaiseView");
const QuestDispute_1 = require("./QuestDispute");
const QuestSpecializationFilter_1 = require("./QuestSpecializationFilter");
const types_1 = require("../types");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
var QuestStatus;
(function (QuestStatus) {
    QuestStatus[QuestStatus["Blocked"] = -1] = "Blocked";
    QuestStatus[QuestStatus["Created"] = 0] = "Created";
    QuestStatus[QuestStatus["Active"] = 1] = "Active";
    QuestStatus[QuestStatus["Closed"] = 2] = "Closed";
    QuestStatus[QuestStatus["Dispute"] = 3] = "Dispute";
    QuestStatus[QuestStatus["WaitWorker"] = 4] = "WaitWorker";
    QuestStatus[QuestStatus["WaitConfirm"] = 5] = "WaitConfirm";
    QuestStatus[QuestStatus["Done"] = 6] = "Done";
})(QuestStatus = exports.QuestStatus || (exports.QuestStatus = {}));
var QuestEmployment;
(function (QuestEmployment) {
    QuestEmployment["FullTime"] = "fullTime";
    QuestEmployment["PartTime"] = "partTime";
    QuestEmployment["FixedTerm"] = "fixedTerm";
})(QuestEmployment = exports.QuestEmployment || (exports.QuestEmployment = {}));
exports.activeFlowStatuses = [
    QuestStatus.Created,
    QuestStatus.Active,
    QuestStatus.Dispute,
    QuestStatus.WaitWorker,
    QuestStatus.WaitConfirm,
];
let Quest = class Quest extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], Quest.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Quest.prototype, "assignedWorkerId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], Quest.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestStatus.Created })
], Quest.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "workplace", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "employment", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.Priority.AllPriority })
], Quest.prototype, "priority", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "locationPlaceName", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, allowNull: false })
], Quest.prototype, "location", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.GEOMETRY('POINT', 4326) })
], Quest.prototype, "locationPostGIS", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DECIMAL, allowNull: false })
], Quest.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Quest.prototype, "startedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'userId')
], Quest.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'assignedWorkerId')
], Quest.prototype, "assignedWorker", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => QuestMedia_1.QuestMedia)
], Quest.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestChat_1.QuestChat)
], Quest.prototype, "questChat", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestsStarred_1.QuestsStarred)
], Quest.prototype, "star", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestsResponse_1.QuestsResponse)
], Quest.prototype, "response", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestsResponse_1.QuestsResponse)
], Quest.prototype, "responded", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestsResponse_1.QuestsResponse)
], Quest.prototype, "invited", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestSpecializationFilter_1.QuestSpecializationFilter)
], Quest.prototype, "questIndustryForFiltering", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestSpecializationFilter_1.QuestSpecializationFilter)
], Quest.prototype, "questSpecializationForFiltering", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestRaiseView_1.QuestRaiseView)
], Quest.prototype, "raiseView", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestsReview_1.QuestsReview)
], Quest.prototype, "yourReview", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => QuestDispute_1.QuestDispute)
], Quest.prototype, "openDispute", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => QuestSpecializationFilter_1.QuestSpecializationFilter)
], Quest.prototype, "questSpecializations", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => QuestDispute_1.QuestDispute)
], Quest.prototype, "questDisputes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => QuestsReview_1.QuestsReview)
], Quest.prototype, "reviews", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => QuestsStarred_1.QuestsStarred)
], Quest.prototype, "starredQuests", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => QuestsResponse_1.QuestsResponse, 'questId')
], Quest.prototype, "responses", void 0);
Quest = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["locationPostGIS", "updatedAt"]
            },
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'medias',
                    through: { attributes: [] }
                }, {
                    model: User_1.User.scope('short'),
                    as: 'user'
                }, {
                    model: User_1.User.scope('short'),
                    as: 'assignedWorker'
                }, {
                    model: QuestSpecializationFilter_1.QuestSpecializationFilter,
                    as: 'questSpecializations',
                    attributes: ['path'],
                }, {
                    model: QuestRaiseView_1.QuestRaiseView,
                    as: "raiseView",
                    attributes: ['status', 'duration', 'type', 'endedAt'],
                }]
        },
        short: {
            attributes: ["id", "userId", "assignedWorkerId", "title"],
            include: [{
                    model: QuestDispute_1.QuestDispute,
                    as: 'openDispute',
                    where: {
                        status: {
                            [sequelize_1.Op.or]: [QuestDispute_1.DisputeStatus.pending, QuestDispute_1.DisputeStatus.inProgress]
                        }
                    },
                }],
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], Quest);
exports.Quest = Quest;
