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
const types_1 = require("../types");
let ReferrerAffiliate = class ReferrerAffiliate extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ReferrerAffiliate.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferrerAffiliate.prototype, "affiliateId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReferrerAffiliate.prototype, "userReferralId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: types_1.AffiliateStatus.New })
], ReferrerAffiliate.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ReferrerAffiliate.prototype, "user", void 0);
ReferrerAffiliate = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('shortWithWallet'),
                    as: 'user'
                }]
        },
        shortAffiliate: {
            attributes: {
                include: ["affiliateId", "userReferralId", "status"],
                exclude: ["createdAt", "updatedAt", "deletedAt"]
            }
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], ReferrerAffiliate);
exports.ReferrerAffiliate = ReferrerAffiliate;
