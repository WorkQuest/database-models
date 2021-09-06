"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const User_1 = require("./User");
const ForumPostComment_1 = require("./ForumPostComment");
const Media_1 = require("./Media");
const ForumPostMedia_1 = require("./ForumPostMedia");
const ForumPostLike_1 = require("./ForumPostLike");
let ForumPost = class ForumPost extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], ForumPost.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ForumPost.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], ForumPost.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], ForumPost.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ForumPostComment_1.ForumPostComment)
], ForumPost.prototype, "rootComments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ForumPostLike_1.ForumPostLike)
], ForumPost.prototype, "likes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => ForumPostMedia_1.ForumPostMedia)
], ForumPost.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => ForumPostLike_1.ForumPostLike)
], ForumPost.prototype, "userLikes", void 0);
ForumPost = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["rootComments"]
            },
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
                        attributes: ["id"]
                    }
                }]
        },
        withRootComments: {
            include: [{
                    model: ForumPostComment_1.ForumPostComment,
                    as: "rootComments",
                    where: { rootCommentId: null }
                }, {
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: {
                        attributes: []
                    }
                }, {
                    model: User_1.User,
                    as: "userLikes",
                    through: {
                        attributes: ['id']
                    }
                }]
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], ForumPost);
exports.ForumPost = ForumPost;
