"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerProfileVisibilitySetting = void 0;
const User_1 = require("./User");
const utils_1 = require("../../utils");
const types_1 = require("../types");
const sequelize_typescript_1 = require("sequelize-typescript");
let WorkerProfileVisibilitySetting = class WorkerProfileVisibilitySetting extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], WorkerProfileVisibilitySetting.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], WorkerProfileVisibilitySetting.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.RatingStatus.AllStatuses })
], WorkerProfileVisibilitySetting.prototype, "ratingStatusCanInviteMeOnQuest", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.RatingStatus.AllStatuses })
], WorkerProfileVisibilitySetting.prototype, "ratingStatusInMySearch", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const ratingStatusCanInviteMeOnQuest = this.getDataValue('ratingStatusCanInviteMeOnQuest');
            return types_1.RatingStatuses.filter((status) => ((status & ratingStatusCanInviteMeOnQuest) != 0));
        },
        set() {
            throw Error("Can't set this field");
        },
    })
], WorkerProfileVisibilitySetting.prototype, "arrayRatingStatusCanInviteMeOnQuest", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const ratingStatusInMySearch = this.getDataValue('ratingStatusInMySearch');
            return types_1.RatingStatuses.filter((status) => ((status & ratingStatusInMySearch) != 0));
        },
        set() {
            throw Error("Can't set this field");
        },
    })
], WorkerProfileVisibilitySetting.prototype, "arrayRatingStatusInMySearch", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], WorkerProfileVisibilitySetting.prototype, "user", void 0);
WorkerProfileVisibilitySetting = __decorate([
    sequelize_typescript_1.Table
], WorkerProfileVisibilitySetting);
exports.WorkerProfileVisibilitySetting = WorkerProfileVisibilitySetting;
