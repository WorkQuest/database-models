"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const Session_1 = require("./Session");
const Quest_1 = require("./Quest");
const QuestsResponse_1 = require("./QuestsResponse");
const Media_1 = require("./Media");
const QuestMedia_1 = require("./QuestMedia");
const Review_1 = require("./Review");
const RatingStatistic_1 = require("./RatingStatistic");
const StarredQuests_1 = require("./StarredQuests");
const PortfolioMedia_1 = require("./PortfolioMedia");
const Portfolio_1 = require("./Portfolio");
const Admin_1 = require("./Admin");
const AdminSession_1 = require("./AdminSession");
const Chat_1 = require("./Chat");
const ChatMember_1 = require("./ChatMember");
const MessageMedia_1 = require("./MessageMedia");
const Message_1 = require("./Message");
const ForumPostComment_1 = require("./ForumPostComment");
const ForumPostCommentLike_1 = require("./ForumPostCommentLike");
const ForumPostCommentMedia_1 = require("./ForumPostCommentMedia");
const ForumPost_1 = require("./ForumPost");
const ForumPostLike_1 = require("./ForumPostLike");
const ForumPostMedia_1 = require("./ForumPostMedia");
function initDatabase(dbLink, logging = false, sync = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = new sequelize_typescript_1.Sequelize(dbLink, {
            logging,
            dialect: "postgres",
            models: [
                StarredQuests_1.StarredQuests,
                User_1.User,
                Session_1.Session,
                Quest_1.Quest,
                QuestsResponse_1.QuestsResponse,
                Media_1.Media,
                QuestMedia_1.QuestMedia,
                Review_1.Review,
                RatingStatistic_1.RatingStatistic,
                Portfolio_1.Portfolio,
                PortfolioMedia_1.PortfolioMedia,
                Admin_1.Admin,
                AdminSession_1.AdminSession,
                Chat_1.Chat,
                ChatMember_1.ChatMember,
                Message_1.Message,
                MessageMedia_1.MessageMedia,
                ForumPostComment_1.ForumPostComment,
                ForumPostCommentLike_1.ForumPostCommentLike,
                ForumPostCommentMedia_1.ForumPostCommentMedia,
                ForumPost_1.ForumPost,
                ForumPostLike_1.ForumPostLike,
                ForumPostMedia_1.ForumPostMedia
            ]
        });
        if (sync)
            yield sequelize.sync();
        return sequelize;
    });
}
exports.initDatabase = initDatabase;
__export(require("./User"));
__export(require("./Session"));
__export(require("./Quest"));
__export(require("./QuestsResponse"));
__export(require("./Media"));
__export(require("./QuestMedia"));
__export(require("./Review"));
__export(require("./RatingStatistic"));
__export(require("./StarredQuests"));
__export(require("./PortfolioMedia"));
__export(require("./Portfolio"));
__export(require("./Admin"));
__export(require("./AdminSession"));
__export(require("./Chat"));
__export(require("./ChatMember"));
__export(require("./Message"));
__export(require("./MessageMedia"));
__export(require("./ForumPostComment"));
__export(require("./ForumPostCommentLike"));
__export(require("./ForumPostCommentMedia"));
__export(require("./ForumPost"));
__export(require("./ForumPostLike"));
__export(require("./ForumPostMedia"));
