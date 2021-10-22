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
const User_1 = require("./user/User");
const Session_1 = require("./user/Session");
const Quest_1 = require("./quest/Quest");
const QuestsResponse_1 = require("./quest/QuestsResponse");
const Media_1 = require("./Media");
const QuestMedia_1 = require("./quest/QuestMedia");
const Review_1 = require("./quest/Review");
const RatingStatistic_1 = require("./user/RatingStatistic");
const StarredQuests_1 = require("./quest/StarredQuests");
const PortfolioMedia_1 = require("./user/PortfolioMedia");
const Portfolio_1 = require("./user/Portfolio");
const Admin_1 = require("./admin/Admin");
const AdminSession_1 = require("./admin/AdminSession");
const Chat_1 = require("./chats/Chat");
const ChatMember_1 = require("./chats/ChatMember");
const MessageMedia_1 = require("./chats/MessageMedia");
const Message_1 = require("./chats/Message");
const InfoMessage_1 = require("./chats/InfoMessage");
const StarredMessage_1 = require("./chats/StarredMessage");
const BridgeParserBlockInfo_1 = require("./bridge/BridgeParserBlockInfo");
const BridgeSwapTokenEvent_1 = require("./bridge/BridgeSwapTokenEvent");
const IndustryFilter_1 = require("./filtres/IndustryFilter");
const SpecializationFilter_1 = require("./filtres/SpecializationFilter");
const QuestSpecializationFilter_1 = require("./quest/QuestSpecializationFilter");
const UserSpecializationFilter_1 = require("./user/UserSpecializationFilter");
const DiscussionComment_1 = require("./discussion/DiscussionComment");
const DiscussionCommentLike_1 = require("./discussion/DiscussionCommentLike");
const DiscussionCommentMedia_1 = require("./discussion/DiscussionCommentMedia");
const Discussion_1 = require("./discussion/Discussion");
const DiscussionLike_1 = require("./discussion/DiscussionLike");
const DiscussionMedia_1 = require("./discussion/DiscussionMedia");
function initDatabase(dbLink, logging = false, sync = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = new sequelize_typescript_1.Sequelize(dbLink, {
            logging,
            dialect: "postgres",
            models: [
                User_1.User,
                Session_1.Session,
                Quest_1.Quest,
                StarredQuests_1.StarredQuests,
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
                InfoMessage_1.InfoMessage,
                StarredMessage_1.StarredMessage,
                BridgeParserBlockInfo_1.BridgeParserBlockInfo,
                BridgeSwapTokenEvent_1.BridgeSwapTokenEvent,
                IndustryFilter_1.IndustryFilter,
                SpecializationFilter_1.SpecializationFilter,
                QuestSpecializationFilter_1.QuestSpecializationFilter,
                UserSpecializationFilter_1.UserSpecializationFilter,
                Discussion_1.Discussion,
                DiscussionLike_1.DiscussionLike,
                DiscussionMedia_1.DiscussionMedia,
                DiscussionComment_1.DiscussionComment,
                DiscussionCommentLike_1.DiscussionCommentLike,
                DiscussionCommentMedia_1.DiscussionCommentMedia,
            ]
        });
        if (sync)
            yield sequelize.sync();
        return sequelize;
    });
}
exports.initDatabase = initDatabase;
__export(require("./types"));
__export(require("./Media"));
__export(require("./quest/Quest"));
__export(require("./quest/QuestsResponse"));
__export(require("./quest/QuestMedia"));
__export(require("./quest/Review"));
__export(require("./quest/QuestSpecializationFilter"));
__export(require("./quest/StarredQuests"));
__export(require("./user/User"));
__export(require("./user/RatingStatistic"));
__export(require("./user/PortfolioMedia"));
__export(require("./user/Portfolio"));
__export(require("./user/Session"));
__export(require("./admin/Admin"));
__export(require("./admin/AdminSession"));
__export(require("./user/UserSpecializationFilter"));
__export(require("./chats/Chat"));
__export(require("./chats/ChatMember"));
__export(require("./chats/Message"));
__export(require("./chats/MessageMedia"));
__export(require("./chats/InfoMessage"));
__export(require("./chats/StarredMessage"));
__export(require("./bridge/BridgeParserBlockInfo"));
__export(require("./bridge/BridgeSwapTokenEvent"));
__export(require("./filtres/IndustryFilter"));
__export(require("./filtres/SpecializationFilter"));
__export(require("./discussion/DiscussionComment"));
__export(require("./discussion/DiscussionCommentLike"));
__export(require("./discussion/DiscussionCommentMedia"));
__export(require("./discussion/Discussion"));
__export(require("./discussion/DiscussionLike"));
__export(require("./discussion/DiscussionMedia"));
