"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ForumComment_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumComment = void 0;
const Media_1 = require("../Media");
const User_1 = require("../user/User");
const utils_1 = require("../../utils");
const ForumPost_1 = require("./ForumPost");
const ForumCommentMedia_1 = require("./ForumCommentMedia");
const ForumCommentLike_1 = require("./ForumCommentLike");
const sequelize_typescript_1 = require("sequelize-typescript");
let ForumComment = ForumComment_1 = class ForumComment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ForumComment.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumComment.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ForumPost_1.ForumPost),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumComment.prototype, "forumPostId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ForumComment_1),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ForumComment.prototype, "rootCommentId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], ForumComment.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ForumComment.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ForumPost_1.ForumPost)
], ForumComment.prototype, "forumPost", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ForumComment_1)
], ForumComment.prototype, "rootComment", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ForumComment_1)
], ForumComment.prototype, "subComments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ForumCommentLike_1.ForumCommentLike)
], ForumComment.prototype, "commentLikes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => ForumCommentMedia_1.ForumCommentMedia)
], ForumComment.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => ForumCommentLike_1.ForumCommentLike)
], ForumComment.prototype, "userLikes", void 0);
ForumComment = ForumComment_1 = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: { attributes: [] }
                }, {
                    model: User_1.User.scope("short"),
                    as: "userLikes",
                    through: { attributes: [] }
                }]
        },
        withSubComments: {
            include: [{
                    model: ForumComment_1,
                    as: 'subComments'
                }, {
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: { attributes: [] }
                }, {
                    model: User_1.User.scope("short"),
                    as: "userLikes",
                    through: { attributes: [] }
                }]
        }
    })),
    sequelize_typescript_1.Table
], ForumComment);
exports.ForumComment = ForumComment;
