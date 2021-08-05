"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const utils_1 = require("../utils");
const Media_1 = require("./Media");
const QuestMedia_1 = require("./QuestMedia");
const quest_1 = require("../utils/quest");
const errors_1 = require("../utils/errors");
const Review_1 = require("./Review");
const QuestsResponse_1 = require("./QuestsResponse");
const StarredQuests_1 = require("./StarredQuests");
var QuestPriority;
(function (QuestPriority) {
    QuestPriority[QuestPriority["AllPriority"] = 0] = "AllPriority";
    QuestPriority[QuestPriority["Low"] = 1] = "Low";
    QuestPriority[QuestPriority["Normal"] = 2] = "Normal";
    QuestPriority[QuestPriority["Urgent"] = 3] = "Urgent";
})(QuestPriority = exports.QuestPriority || (exports.QuestPriority = {}));
var AdType;
(function (AdType) {
    AdType[AdType["Free"] = 0] = "Free";
    AdType[AdType["Paid"] = 1] = "Paid";
})(AdType = exports.AdType || (exports.AdType = {}));
var QuestStatus;
(function (QuestStatus) {
    QuestStatus[QuestStatus["Created"] = 0] = "Created";
    QuestStatus[QuestStatus["Active"] = 1] = "Active";
    QuestStatus[QuestStatus["Closed"] = 2] = "Closed";
    QuestStatus[QuestStatus["Dispute"] = 3] = "Dispute";
    QuestStatus[QuestStatus["WaitWorker"] = 4] = "WaitWorker";
    QuestStatus[QuestStatus["WaitConfirm"] = 5] = "WaitConfirm";
    QuestStatus[QuestStatus["Done"] = 6] = "Done";
})(QuestStatus = exports.QuestStatus || (exports.QuestStatus = {}));
let Quest = class Quest extends sequelize_typescript_1.Model {
    updateFieldLocationPostGIS() {
        this.setDataValue('locationPostGIS', quest_1.transformToGeoPostGIS(this.getDataValue('location')));
    }
    mustHaveStatus(...statuses) {
        if (!statuses.includes(this.status)) {
            throw utils_1.error(errors_1.Errors.InvalidStatus, "Quest status doesn't match", {
                current: this.status,
                mustHave: statuses
            });
        }
    }
    mustBeAppointedOnQuest(workerId) {
        if (this.assignedWorkerId !== workerId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "Worker is not appointed on quest", {
                current: this.userId,
                mustHave: workerId
            });
        }
    }
    mustBeQuestCreator(userId) {
        if (this.userId !== userId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "User is not quest creator", {
                current: this.userId,
                mustHave: userId
            });
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], Quest.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Quest.prototype, "assignedWorkerId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestStatus.Created })
], Quest.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestPriority.AllPriority })
], Quest.prototype, "priority", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "category", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB })
], Quest.prototype, "location", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.GEOMETRY('POINT', 4326) })
], Quest.prototype, "locationPostGIS", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT })
], Quest.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DECIMAL, allowNull: false })
], Quest.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: AdType.Free })
], Quest.prototype, "adType", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => QuestMedia_1.QuestMedia)
], Quest.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'userId')
], Quest.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, 'assignedWorkerId')
], Quest.prototype, "assignedWorker", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => StarredQuests_1.StarredQuests)
], Quest.prototype, "starredQuests", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => QuestsResponse_1.QuestsResponse, 'questId')
], Quest.prototype, "responses", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Review_1.Review)
], Quest.prototype, "reviews", void 0);
Quest = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["locationPostGIS"]
            },
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'medias',
                    through: {
                        attributes: []
                    }
                }, {
                    model: User_1.User,
                    as: 'user'
                }, {
                    model: User_1.User,
                    as: 'assignedWorker'
                }]
        }
    })),
    sequelize_typescript_1.Table
], Quest);
exports.Quest = Quest;