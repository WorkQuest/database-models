"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DiscussionComment_1;
Object.defineProperty(exports, "__esModule", { value: true });
const Media_1 = require("../Media");
const User_1 = require("../user/User");
const utils_1 = require("../../utils");
const Discussion_1 = require("./Discussion");
const DiscussionCommentMedia_1 = require("./DiscussionCommentMedia");
const DiscussionCommentLike_1 = require("./DiscussionCommentLike");
const sequelize_typescript_1 = require("sequelize-typescript");
var DiscussionCommentStatus;
(function (DiscussionCommentStatus) {
    DiscussionCommentStatus[DiscussionCommentStatus["Blocked"] = -1] = "Blocked";
    DiscussionCommentStatus[DiscussionCommentStatus["Created"] = 0] = "Created";
})(DiscussionCommentStatus = exports.DiscussionCommentStatus || (exports.DiscussionCommentStatus = {}));
let DiscussionComment = DiscussionComment_1 = class DiscussionComment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], DiscussionComment.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionComment.prototype, "authorId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Discussion_1.Discussion),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], DiscussionComment.prototype, "discussionId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => DiscussionComment_1),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], DiscussionComment.prototype, "rootCommentId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], DiscussionComment.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], DiscussionComment.prototype, "amountLikes", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], DiscussionComment.prototype, "amountSubComments", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], DiscussionComment.prototype, "level", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.SMALLINT, defaultValue: DiscussionCommentStatus.Created })
], DiscussionComment.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], DiscussionComment.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Discussion_1.Discussion)
], DiscussionComment.prototype, "discussion", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => DiscussionComment_1)
], DiscussionComment.prototype, "rootComment", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => DiscussionComment_1)
], DiscussionComment.prototype, "subComments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => DiscussionCommentLike_1.DiscussionCommentLike)
], DiscussionComment.prototype, "commentLikes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => DiscussionCommentMedia_1.DiscussionCommentMedia)
], DiscussionComment.prototype, "medias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => DiscussionCommentLike_1.DiscussionCommentLike)
], DiscussionComment.prototype, "userLikes", void 0);
DiscussionComment = DiscussionComment_1 = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: { attributes: [] }
                }, {
                    model: User_1.User.scope('short'),
                    as: "author",
                }, {
                    model: DiscussionComment_1.unscoped(),
                    as: 'rootComment',
                }],
        },
    })),
    sequelize_typescript_1.Table
], DiscussionComment);
exports.DiscussionComment = DiscussionComment;
