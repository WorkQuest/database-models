"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestsResponse = void 0;
const User_1 = require("../user/User");
const Quest_1 = require("./Quest");
const QuestChat_1 = require("../chats/QuestChat");
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
const QuestResponseMedia_1 = require("./QuestResponseMedia");
const types_1 = require("./types");
const sequelize_typescript_1 = require("sequelize-typescript");
let QuestsResponse = class QuestsResponse extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], QuestsResponse.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestsResponse.prototype, "workerId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Quest_1.Quest),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], QuestsResponse.prototype, "questId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.QuestsResponseStatus.Open })
], QuestsResponse.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.QuestsResponseType.Response })
], QuestsResponse.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })
], QuestsResponse.prototype, "message", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], QuestsResponse.prototype, "worker", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Quest_1.Quest)
], QuestsResponse.prototype, "quest", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Media_1.Media, () => QuestResponseMedia_1.QuestResponseMedia)
], QuestsResponse.prototype, "medias", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => QuestChat_1.QuestChat)
], QuestsResponse.prototype, "questChat", void 0);
QuestsResponse = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            attributes: {
                exclude: ['updatedAt']
            },
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'worker'
                }, {
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'medias',
                    through: { attributes: [] }
                }]
        }
    })),
    sequelize_typescript_1.Table
], QuestsResponse);
exports.QuestsResponse = QuestsResponse;
