"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralProgramAffiliate = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const ReferralProgramReferral_1 = require("./ReferralProgramReferral");
let ReferralProgramAffiliate = class ReferralProgramAffiliate extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], ReferralProgramAffiliate.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferralProgramAffiliate.prototype, "affiliateUserId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], ReferralProgramAffiliate.prototype, "referralCodeId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, { constraints: false })
], ReferralProgramAffiliate.prototype, "affiliateUser", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ReferralProgramReferral_1.ReferralProgramReferral)
], ReferralProgramAffiliate.prototype, "referralProgramReferral", void 0);
ReferralProgramAffiliate = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('shortWithWallet'),
                    as: 'affiliateUser',
                }],
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    })),
    sequelize_typescript_1.Table
], ReferralProgramAffiliate);
exports.ReferralProgramAffiliate = ReferralProgramAffiliate;
