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
const Comment_1 = require("./Comment");
const Media_1 = require("./Media");
const NewsMedia_1 = require("./NewsMedia");
const NewsLike_1 = require("./NewsLike");
let News = class News extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], News.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], News.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], News.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], News.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Comment_1.Comment)
], News.prototype, "rootComments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => NewsLike_1.LikeNews)
], News.prototype, "likes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => NewsMedia_1.NewsMedia)
], News.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => NewsLike_1.LikeNews)
], News.prototype, "userLikes", void 0);
News = __decorate([
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
                        attributes: []
                    }
                }]
        },
        withRootComments: {
            include: [{
                    model: Comment_1.Comment,
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
                        attributes: []
                    }
                }]
        }
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], News);
exports.News = News;
