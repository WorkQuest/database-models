"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ForumPostComment_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const User_1 = require("./User");
const ForumPost_1 = require("./ForumPost");
const ForumPostCommentMedia_1 = require("./ForumPostCommentMedia");
const Media_1 = require("./Media");
const ForumPostCommentLike_1 = require("./ForumPostCommentLike");
let ForumPostComment = ForumPostComment_1 = class ForumPostComment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ForumPostComment.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumPostComment.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ForumPost_1.ForumPost),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumPostComment.prototype, "forumPostId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => ForumPostComment_1),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ForumPostComment.prototype, "rootCommentId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], ForumPostComment.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ForumPostComment.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ForumPost_1.ForumPost)
], ForumPostComment.prototype, "forumPost", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ForumPostComment_1)
], ForumPostComment.prototype, "rootComment", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ForumPostComment_1)
], ForumPostComment.prototype, "subComments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ForumPostCommentLike_1.ForumPostCommentLike)
], ForumPostComment.prototype, "likeComment", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => ForumPostCommentMedia_1.ForumPostCommentMedia)
], ForumPostComment.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => ForumPostCommentLike_1.ForumPostCommentLike)
], ForumPostComment.prototype, "userLikes", void 0);
ForumPostComment = ForumPostComment_1 = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: {
                        attributes: []
                    }
                }, {
                    model: User_1.User.scope("short"),
                    as: "userLikes",
                    through: {
                        attributes: []
                    }
                }]
        },
        withSubComments: {
            include: [{
                    model: ForumPostComment_1,
                    as: 'subComments'
                }, {
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: {
                        attributes: []
                    }
                }, {
                    model: User_1.User.scope("short"),
                    as: "userLikes",
                    through: {
                        attributes: []
                    }
                }]
        }
    })),
    sequelize_typescript_1.Table
], ForumPostComment);
exports.ForumPostComment = ForumPostComment;
