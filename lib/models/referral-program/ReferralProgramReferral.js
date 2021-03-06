"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralProgramReferral = exports.RewardStatus = exports.ReferralStatus = void 0;
const User_1 = require("../user/User");
const utils_1 = require("../../utils");
const ReferralProgramAffiliate_1 = require("./ReferralProgramAffiliate");
const sequelize_typescript_1 = require("sequelize-typescript");
var ReferralStatus;
(function (ReferralStatus) {
    ReferralStatus["Created"] = "created";
    ReferralStatus["Registered"] = "registered";
})(ReferralStatus = exports.ReferralStatus || (exports.ReferralStatus = {}));
var RewardStatus;
(function (RewardStatus) {
    RewardStatus["Paid"] = "paid";
    RewardStatus["Claimed"] = "claimed";
})(RewardStatus = exports.RewardStatus || (exports.RewardStatus = {}));
let ReferralProgramReferral = class ReferralProgramReferral extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], ReferralProgramReferral.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferralProgramReferral.prototype, "referralUserId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ReferralProgramAffiliate_1.ReferralProgramAffiliate),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferralProgramReferral.prototype, "affiliateId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: ReferralStatus.Registered })
], ReferralProgramReferral.prototype, "referralStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], ReferralProgramReferral.prototype, "rewardStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], ReferralProgramReferral.prototype, "referralUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ReferralProgramAffiliate_1.ReferralProgramAffiliate)
], ReferralProgramReferral.prototype, "referralProgramAffiliate", void 0);
ReferralProgramReferral = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('shortWithWallet'),
                    as: 'referralUser',
                }],
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    })),
    sequelize_typescript_1.Table
], ReferralProgramReferral);
exports.ReferralProgramReferral = ReferralProgramReferral;
