"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const utils_1 = require("../../utils");
const bcrypt = require("bcrypt");
const Media_1 = require("../Media");
const Session_1 = require("./Session");
const errors_1 = require("../../utils/errors");
const Review_1 = require("../quest/Review");
const RatingStatistic_1 = require("./RatingStatistic");
const ChatMember_1 = require("../chats/ChatMember");
const UserSpecializationFilter_1 = require("./UserSpecializationFilter");
const DiscussionLike_1 = require("../discussion/DiscussionLike");
const DiscussionCommentLike_1 = require("../discussion/DiscussionCommentLike");
const Chat_1 = require("../chats/Chat");
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
    UserStatus[UserStatus["Blocked"] = 3] = "Blocked";
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
            if (!this.password) {
                return false;
            }
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
    static userMustExist(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield User_1.findByPk(userId))) {
                throw utils_1.error(errors_1.Errors.NotFound, "User does not exist", { userId });
            }
        });
    }
    static usersMustExist(userIds) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const id of userIds) {
                yield User_1.userMustExist(id);
            }
        });
    }
    isTOTPEnabled() {
        return this.settings.security.TOTP.active;
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Media_1.Media),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
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
    })
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: {} })
], User.prototype, "additionalInfo", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true })
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], User.prototype, "role", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSONB, defaultValue: exports.defaultUserSettings })
], User.prototype, "settings", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: UserStatus.Unconfirmed })
], User.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: StatusKYC.Unconfirmed })
], User.prototype, "statusKYC", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], User.prototype, "tempPhone", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], User.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSONB)
], User.prototype, "location", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.GEOMETRY('POINT', 4326))
], User.prototype, "locationPostGIS", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Media_1.Media, { constraints: false, foreignKey: 'avatarId' })
], User.prototype, "avatar", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => RatingStatistic_1.RatingStatistic)
], User.prototype, "ratingStatistic", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Session_1.Session)
], User.prototype, "sessions", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Review_1.Review, 'toUserId')
], User.prototype, "reviews", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Media_1.Media, { constraints: false })
], User.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => UserSpecializationFilter_1.UserSpecializationFilter)
], User.prototype, "userSpecializations", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => Chat_1.Chat)
], User.prototype, "chatOfUser", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => ChatMember_1.ChatMember)
], User.prototype, "chatMember", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => UserSpecializationFilter_1.UserSpecializationFilter)
], User.prototype, "userIndustryForFiltering", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => UserSpecializationFilter_1.UserSpecializationFilter)
], User.prototype, "userSpecializationForFiltering", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Chat_1.Chat)
], User.prototype, "chatsOfUser", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ChatMember_1.ChatMember)
], User.prototype, "chatMembers", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => DiscussionLike_1.DiscussionLike)
], User.prototype, "discussionLikes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => DiscussionCommentLike_1.DiscussionCommentLike)
], User.prototype, "commentLikes", void 0);
User = User_1 = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["password", "settings", "tempPhone", "createdAt", "updatedAt", "deletedAt", "locationPostGIS"]
            },
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'avatar'
                }, {
                    model: RatingStatistic_1.RatingStatistic,
                    as: 'ratingStatistic'
                }, {
                    model: UserSpecializationFilter_1.UserSpecializationFilter,
                    as: 'userSpecializations',
                    attributes: ['path'],
                }]
        },
        withPassword: {
            attributes: {
                include: ["password", "settings", "tempPhone"],
                exclude: ["locationPostGIS"],
            }
        },
        short: {
            attributes: ["id", "firstName", "lastName"],
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'avatar'
                }]
        },
        shortWithAdditionalInfo: {
            attributes: ["id", "firstName", "lastName", "additionalInfo"],
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'avatar'
                }]
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], User);
exports.User = User;
