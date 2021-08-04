"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const bcrypt = require("bcrypt");
const Media_1 = require("./Media");
const Session_1 = require("./Session");
const errors_1 = require("../utils/errors");
const Review_1 = require("./Review");
const RatingStatistic_1 = require("./RatingStatistic");
const StarredQuests_1 = require("./StarredQuests");
exports.defaultUserSettings = {
    restorePassword: null,
    emailConfirm: null,
    phoneConfirm: null,
    social: {},
    security: {
        TOTP: {
            confirmCode: null,
            active: false,
            secret: null,
        }
    }
};
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Unconfirmed"] = 0] = "Unconfirmed";
    UserStatus[UserStatus["Confirmed"] = 1] = "Confirmed";
    UserStatus[UserStatus["NeedSetRole"] = 2] = "NeedSetRole";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["Employer"] = "employer";
    UserRole["Worker"] = "worker";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var StatusKYC;
(function (StatusKYC) {
    StatusKYC[StatusKYC["Unconfirmed"] = 0] = "Unconfirmed";
    StatusKYC[StatusKYC["Confirmed"] = 1] = "Confirmed";
})(StatusKYC = exports.StatusKYC || (exports.StatusKYC = {}));
let User = User_1 = class User extends sequelize_typescript_1.Model {
    passwordCompare(pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.compareSync(pwd, this.password);
        });
    }
    static findWithEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.scope("withPassword").findOne({ where: { ["email"]: email } });
        });
    }
    static findWithSocialId(network, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.scope("withPassword").findOne({
                where: {
                    [`settings.social.${network}.id`]: id
                }
            });
        });
    }
    mustHaveRole(role) {
        if (this.role !== role) {
            throw utils_1.error(errors_1.Errors.InvalidRole, "User isn't match role", {
                current: this.role,
                mustHave: role
            });
        }
    }
    mustHaveActiveStatusTOTP(activeStatus) {
        if (this.settings.security.TOTP.active !== activeStatus) {
            throw utils_1.error(errors_1.Errors.InvalidActiveStatusTOTP, `Active status TOTP is not ${activeStatus ? "enable" : "disable"}`, {});
        }
    }
    isTOTPEnabled() {
        return this.settings.security.TOTP.active;
    }
    validateTOTP(TOTP) {
        if (!utils_1.totpValidate(TOTP, this.settings.security.TOTP.secret)) {
            throw utils_1.error(errors_1.Errors.InvalidTOTP, "Invalid TOTP", {});
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null }),
    __metadata("design:type", String)
], User.prototype, "avatarId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        set(value) {
            if (!value) {
                this.setDataValue("password", null);
                return;
            }
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue("password", hash);
        },
        get() {
            return this.getDataValue("password");
        }
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: {} }),
    __metadata("design:type", Object)
], User.prototype, "additionalInfo", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: exports.defaultUserSettings }),
    __metadata("design:type", Object)
], User.prototype, "settings", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: UserStatus.Unconfirmed }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: StatusKYC.Unconfirmed }),
    __metadata("design:type", Number)
], User.prototype, "statusKYC", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null }),
    __metadata("design:type", String)
], User.prototype, "tempPhone", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media, { constraints: false, foreignKey: 'avatarId' }),
    __metadata("design:type", Media_1.Media)
], User.prototype, "avatar", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => RatingStatistic_1.RatingStatistic),
    __metadata("design:type", RatingStatistic_1.RatingStatistic)
], User.prototype, "ratingStatistic", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => StarredQuests_1.StarredQuests),
    __metadata("design:type", Array)
], User.prototype, "starredQuests", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Review_1.Review, 'toUserId'),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Session_1.Session),
    __metadata("design:type", Array)
], User.prototype, "sessions", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Media_1.Media, { constraints: false }),
    __metadata("design:type", Array)
], User.prototype, "medias", void 0);
User = User_1 = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["password", "settings", "tempPhone", "createdAt", "updatedAt"]
            },
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'avatar'
                }, {
                    model: RatingStatistic_1.RatingStatistic,
                    as: 'ratingStatistic'
                }]
        },
        withPassword: {
            attributes: {
                include: ["password", "settings", "tempPhone"]
            }
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], User);
exports.User = User;
function getDefaultAdditionalInfo(role) {
    let additionalInfo = {
        description: null,
        secondMobileNumber: null,
        address: null,
        socialNetwork: {
            instagram: null,
            twitter: null,
            linkedin: null,
            facebook: null
        }
    };
    if (role === UserRole.Worker) {
        additionalInfo = Object.assign(Object.assign({}, additionalInfo), { skills: [], educations: [], workExperiences: [] });
    }
    else if (role === UserRole.Employer) {
        additionalInfo = Object.assign(Object.assign({}, additionalInfo), { company: null, CEO: null, website: null });
    }
    return additionalInfo;
}
exports.getDefaultAdditionalInfo = getDefaultAdditionalInfo;
//# sourceMappingURL=User.js.map