"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discussion = void 0;
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
const User_1 = require("../user/User");
const DiscussionComment_1 = require("./DiscussionComment");
const DiscussionMedia_1 = require("./DiscussionMedia");
const DiscussionLike_1 = require("./DiscussionLike");
const sequelize_typescript_1 = require("sequelize-typescript");
let Discussion = class Discussion extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], Discussion.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Discussion.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Discussion.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], Discussion.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], Discussion.prototype, "amountLikes", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], Discussion.prototype, "amountComments", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Discussion.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => DiscussionComment_1.DiscussionComment)
], Discussion.prototype, "comments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => DiscussionLike_1.DiscussionLike)
], Discussion.prototype, "likes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => DiscussionMedia_1.DiscussionMedia)
], Discussion.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => DiscussionLike_1.DiscussionLike)
], Discussion.prototype, "userLikes", void 0);
Discussion = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'author',
                }, {
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: { attributes: [] }
                }, {
                    model: DiscussionComment_1.DiscussionComment,
                    as: 'comments',
                    where: { rootCommentId: null },
                    limit: 5,
                }, {
                    model: User_1.User.scope('short'),
                    as: 'userLikes',
                    limit: 5,
                }]
        },
        short: {
            include: [{
                    model: User_1.User.scope('short'),
                    as: 'author',
                }]
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], Discussion);
exports.Discussion = Discussion;
