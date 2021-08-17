"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Comment_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const User_1 = require("./User");
const News_1 = require("./News");
const CommentMedia_1 = require("./CommentMedia");
const Media_1 = require("./Media");
const CommentLike_1 = require("./CommentLike");
let Comment = Comment_1 = class Comment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], Comment.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Comment.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => News_1.News),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Comment.prototype, "newsId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Comment_1),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Comment.prototype, "rootCommentId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], Comment.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Comment.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => News_1.News)
], Comment.prototype, "news", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Comment_1)
], Comment.prototype, "rootComment", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Comment_1)
], Comment.prototype, "subComments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => CommentLike_1.LikeComment)
], Comment.prototype, "likeComment", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => CommentMedia_1.CommentMedia)
], Comment.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => CommentLike_1.LikeComment)
], Comment.prototype, "userLikes", void 0);
Comment = Comment_1 = __decorate([
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
                    model: Comment_1,
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
], Comment);
exports.Comment = Comment;
