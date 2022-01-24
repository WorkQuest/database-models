"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quest = exports.activeFlowStatuses = exports.QuestEmployment = exports.QuestStatus = exports.AdType = void 0;
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const Media_1 = require("../Media");
const QuestMedia_1 = require("./QuestMedia");
const Review_1 = require("./Review");
const QuestsResponse_1 = require("./QuestsResponse");
const StarredQuests_1 = require("./StarredQuests");
const types_1 = require("../types");
const QuestSpecializationFilter_1 = require("./QuestSpecializationFilter");
const QuestChat_1 = require("../chats/QuestChat");
const sequelize_typescript_1 = require("sequelize-typescript");
var AdType;
(function (AdType) {
    AdType[AdType["Free"] = 0] = "Free";
    AdType[AdType["Paid"] = 1] = "Paid";
})(AdType = exports.AdType || (exports.AdType = {}));
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
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], Quest.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Quest.prototype, "assignedWorkerId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)
], Quest.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL, defaultValue: () => (0, utils_1.getUUIDInt)(), unique: true })
], Quest.prototype, "nonce", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestStatus.Created })
], Quest.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "workplace", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "employment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.Priority.AllPriority })
], Quest.prototype, "priority", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Quest.prototype, "locationPlaceName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, allowNull: false })
], Quest.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.GEOMETRY('POINT', 4326) })
], Quest.prototype, "locationPostGIS", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL, allowNull: false })
], Quest.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: AdType.Free })
], Quest.prototype, "adType", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, 'userId')
], Quest.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, 'assignedWorkerId')
], Quest.prototype, "assignedWorker", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Media_1.Media, () => QuestMedia_1.QuestMedia)
], Quest.prototype, "medias", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestChat_1.QuestChat)
], Quest.prototype, "questChat", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => StarredQuests_1.StarredQuests)
], Quest.prototype, "star", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestsResponse_1.QuestsResponse)
], Quest.prototype, "response", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestsResponse_1.QuestsResponse)
], Quest.prototype, "responded", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestsResponse_1.QuestsResponse)
], Quest.prototype, "invited", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestSpecializationFilter_1.QuestSpecializationFilter)
], Quest.prototype, "questIndustryForFiltering", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestSpecializationFilter_1.QuestSpecializationFilter)
], Quest.prototype, "questSpecializationForFiltering", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => Review_1.Review)
], Quest.prototype, "yourReview", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => QuestSpecializationFilter_1.QuestSpecializationFilter)
], Quest.prototype, "questSpecializations", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Review_1.Review)
], Quest.prototype, "reviews", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => StarredQuests_1.StarredQuests)
], Quest.prototype, "starredQuests", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => QuestsResponse_1.QuestsResponse, 'questId')
], Quest.prototype, "responses", void 0);
Quest = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
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
                }]
        }
    })),
    (0, sequelize_typescript_1.Table)({ paranoid: true })
], Quest);
exports.Quest = Quest;
