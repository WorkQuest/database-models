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
const errors_1 = require("../../utils/errors");
var QuestsResponseStatus;
(function (QuestsResponseStatus) {
    QuestsResponseStatus[QuestsResponseStatus["Rejected"] = -1] = "Rejected";
    QuestsResponseStatus[QuestsResponseStatus["Open"] = 0] = "Open";
    QuestsResponseStatus[QuestsResponseStatus["Accepted"] = 1] = "Accepted";
    QuestsResponseStatus[QuestsResponseStatus["Closed"] = 2] = "Closed";
})(QuestsResponseStatus = exports.QuestsResponseStatus || (exports.QuestsResponseStatus = {}));
var QuestsResponseType;
(function (QuestsResponseType) {
    QuestsResponseType[QuestsResponseType["Response"] = 0] = "Response";
    QuestsResponseType[QuestsResponseType["Invite"] = 1] = "Invite";
})(QuestsResponseType = exports.QuestsResponseType || (exports.QuestsResponseType = {}));
let QuestsResponse = class QuestsResponse extends sequelize_typescript_1.Model {
    mustBeInvitedToQuest(workerId) {
        this.mustHaveType(QuestsResponseType.Invite);
        if (this.workerId !== workerId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "User isn't invited to quest", {});
        }
    }
    mustHaveStatus(status) {
        if (this.status !== status) {
            throw utils_1.error(errors_1.Errors.Forbidden, "Quest response status doesn't match", {
                mustHave: status,
                current: this.status,
            });
        }
    }
    mustHaveType(type) {
        if (this.type !== type) {
            throw utils_1.error(errors_1.Errors.Forbidden, "Quest response type doesn't match", {
                mustHave: type,
                current: this.type,
            });
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], QuestsResponse.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User), sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestsResponse.prototype, "workerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest), sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], QuestsResponse.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestsResponseStatus.Open })
], QuestsResponse.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: QuestsResponseType.Response })
], QuestsResponse.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT })
], QuestsResponse.prototype, "message", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], QuestsResponse.prototype, "worker", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest)
], QuestsResponse.prototype, "quest", void 0);
QuestsResponse = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ['updatedAt']
            },
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'worker'
                }]
        }
    })),
    sequelize_typescript_1.Table
], QuestsResponse);
exports.QuestsResponse = QuestsResponse;
