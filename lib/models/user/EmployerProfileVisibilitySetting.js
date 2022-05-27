"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const utils_1 = require("../../utils");
const types_1 = require("../types");
const sequelize_typescript_1 = require("sequelize-typescript");
let EmployerProfileVisibilitySetting = class EmployerProfileVisibilitySetting extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], EmployerProfileVisibilitySetting.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], EmployerProfileVisibilitySetting.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.RatingStatus.AllStatuses })
], EmployerProfileVisibilitySetting.prototype, "ratingStatusCanRespondToQuest", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.RatingStatus.AllStatuses })
], EmployerProfileVisibilitySetting.prototype, "ratingStatusInMySearch", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const ratingStatusCanRespondToQuest = this.getDataValue('ratingStatusCanRespondToQuest');
            return types_1.RatingStatuses.filter((status) => ((status & ratingStatusCanRespondToQuest) != 0));
        },
        set() {
            throw Error("Can't set this field");
        },
    })
], EmployerProfileVisibilitySetting.prototype, "arrayRatingStatusCanRespondToQuest", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const ratingStatusInMySearch = this.getDataValue('ratingStatusInMySearch');
            return types_1.RatingStatuses.filter((status) => ((status & ratingStatusInMySearch) != 0));
        },
        set() {
            throw Error("Can't set this field");
        },
    })
], EmployerProfileVisibilitySetting.prototype, "arrayRatingStatusInMySearch", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], EmployerProfileVisibilitySetting.prototype, "user", void 0);
EmployerProfileVisibilitySetting = __decorate([
    sequelize_typescript_1.Table
], EmployerProfileVisibilitySetting);
exports.EmployerProfileVisibilitySetting = EmployerProfileVisibilitySetting;
