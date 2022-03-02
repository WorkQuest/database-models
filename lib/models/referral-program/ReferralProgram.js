"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const ReferralProgramAffiliate_1 = require("./ReferralProgramAffiliate");
let ReferralProgram = class ReferralProgram extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ReferralProgram.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferralProgram.prototype, "referrerUserId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], ReferralProgram.prototype, "paidReward", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], ReferralProgram.prototype, "claimReward", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ReferralProgram.prototype, "referralId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User, { constraints: false })
], ReferralProgram.prototype, "referrer", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ReferralProgramAffiliate_1.ReferralProgramAffiliate)
], ReferralProgram.prototype, "affiliates", void 0);
ReferralProgram = __decorate([
    sequelize_typescript_1.Table({
        scopes: {
            referral: {
                attributes: ["userId", "referralId"]
            }
        }
    })
], ReferralProgram);
exports.ReferralProgram = ReferralProgram;