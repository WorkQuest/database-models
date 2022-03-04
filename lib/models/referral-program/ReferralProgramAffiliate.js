"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../user/User");
const utils_1 = require("../../utils");
const ReferralProgram_1 = require("./ReferralProgram");
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
let ReferralProgramAffiliate = class ReferralProgramAffiliate extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ReferralProgramAffiliate.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferralProgramAffiliate.prototype, "affiliateUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ReferralProgram_1.ReferralProgram),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferralProgramAffiliate.prototype, "referralProgramId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: ReferralStatus.Registered })
], ReferralProgramAffiliate.prototype, "referralStatus", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], ReferralProgramAffiliate.prototype, "rewardStatus", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ReferralProgramAffiliate.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ReferralProgram_1.ReferralProgram)
], ReferralProgramAffiliate.prototype, "referral", void 0);
ReferralProgramAffiliate = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('shortWithWallet'),
                    as: 'user'
                }]
        },
        shortAffiliate: {
            attributes: {
                include: ["affiliateUserId", "referralProgramId", "referralStatus", "rewardStatus"],
                exclude: ["createdAt", "updatedAt"]
            }
        },
        shortReferralProgramAffiliates: {
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'user'
                }],
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    })),
    sequelize_typescript_1.Table
], ReferralProgramAffiliate);
exports.ReferralProgramAffiliate = ReferralProgramAffiliate;
