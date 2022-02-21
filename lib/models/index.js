"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./user/User");
const Session_1 = require("./user/Session");
const Quest_1 = require("./quest/Quest");
const QuestsResponse_1 = require("./quest/QuestsResponse");
const Media_1 = require("./Media");
const QuestMedia_1 = require("./quest/QuestMedia");
const QuestsReview_1 = require("./quest/QuestsReview");
const RatingStatistic_1 = require("./user/RatingStatistic");
const QuestsStarred_1 = require("./quest/QuestsStarred");
const PortfolioMedia_1 = require("./user/PortfolioMedia");
const Portfolio_1 = require("./user/Portfolio");
const Admin_1 = require("./admin/Admin");
const AdminSession_1 = require("./admin/AdminSession");
const Chat_1 = require("./chats/Chat");
const ChatMember_1 = require("./chats/ChatMember");
const ChatsStatistic_1 = require("./chats/ChatsStatistic");
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
const StarredDiscussion_1 = require("./discussion/StarredDiscussion");
const StarredChat_1 = require("./chats/StarredChat");
const QuestChat_1 = require("./chats/QuestChat");
const QuestDispute_1 = require("./quest/QuestDispute");
const QuestsStatistic_1 = require("./quest/QuestsStatistic");
const DailyLiquidity_1 = require("./dailyLiquidity/DailyLiquidity");
const Proposal_1 = require("./proposal/Proposal");
const ProposalMedia_1 = require("./proposal/ProposalMedia");
const ProposalParseBlock_1 = require("./proposal/ProposalParseBlock");
const ProposalCreatedEvent_1 = require("./proposal/ProposalCreatedEvent");
const ProposalVoteCastEvent_1 = require("./proposal/ProposalVoteCastEvent");
const ProposalExecutedEvent_1 = require("./proposal/ProposalExecutedEvent");
const QuestResponseMedia_1 = require("./quest/QuestResponseMedia");
const Wallet_1 = require("./wallet/Wallet");
const WqtWbnbSwapEvent_1 = require("./WqtWbnb/WqtWbnbSwapEvent");
const WqtWbnbBlockInfo_1 = require("./WqtWbnb/WqtWbnbBlockInfo");
const PensionFundBlockInfo_1 = require("./pensionFund/PensionFundBlockInfo");
const PensionFundWithdrewEvent_1 = require("./pensionFund/PensionFundWithdrewEvent");
const PensionFundReceivedEvent_1 = require("./pensionFund/PensionFundReceivedEvent");
const PensionFundWalletUpdatedEvent_1 = require("./pensionFund/PensionFundWalletUpdatedEvent");
const UserBlackList_1 = require("./user/UserBlackList");
const QuestBlackList_1 = require("./quest/QuestBlackList");
const WqtWbnbBurnEvent_1 = require("./WqtWbnb/WqtWbnbBurnEvent");
const WqtWbnbMintEvent_1 = require("./WqtWbnb/WqtWbnbMintEvent");
const UserChangeRoleData_1 = require("./user/UserChangeRoleData");
const QuestDisputeReview_1 = require("./quest/QuestDisputeReview");
const AdminRatingStatistic_1 = require("./admin/AdminRatingStatistic");
function initDatabase(dbLink, logging = false, sync = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = new sequelize_typescript_1.Sequelize(dbLink, {
            logging: logging ? console.log : logging,
            dialect: "postgres",
            models: [
                User_1.User,
                Session_1.Session,
                QuestsReview_1.QuestsReview,
                Portfolio_1.Portfolio,
                UserBlackList_1.UserBlackList,
                UserChangeRoleData_1.UserChangeRoleData,
                Admin_1.Admin,
                AdminSession_1.AdminSession,
                AdminRatingStatistic_1.AdminRatingStatistic,
                Quest_1.Quest,
                QuestChat_1.QuestChat,
                QuestDispute_1.QuestDispute,
                QuestsStarred_1.QuestsStarred,
                QuestsResponse_1.QuestsResponse,
                QuestDisputeReview_1.QuestDisputeReview,
                Chat_1.Chat,
                Message_1.Message,
                ChatMember_1.ChatMember,
                InfoMessage_1.InfoMessage,
                StarredChat_1.StarredChat,
                StarredMessage_1.StarredMessage,
                BridgeParserBlockInfo_1.BridgeParserBlockInfo,
                BridgeSwapTokenEvent_1.BridgeSwapTokenEvent,
                DailyLiquidity_1.DailyLiquidity,
                Discussion_1.Discussion,
                DiscussionLike_1.DiscussionLike,
                StarredDiscussion_1.StarredDiscussion,
                DiscussionComment_1.DiscussionComment,
                DiscussionCommentLike_1.DiscussionCommentLike,
                IndustryFilter_1.IndustryFilter,
                SpecializationFilter_1.SpecializationFilter,
                UserSpecializationFilter_1.UserSpecializationFilter,
                QuestSpecializationFilter_1.QuestSpecializationFilter,
                Proposal_1.Proposal,
                ProposalParseBlock_1.ProposalParseBlock,
                ProposalCreatedEvent_1.ProposalCreatedEvent,
                ProposalVoteCastEvent_1.ProposalVoteCastEvent,
                ProposalExecutedEvent_1.ProposalExecutedEvent,
                ChatsStatistic_1.ChatsStatistic,
                RatingStatistic_1.RatingStatistic,
                QuestsStatistic_1.QuestsStatistic,
                WqtWbnbSwapEvent_1.WqtWbnbSwapEvent,
                WqtWbnbBlockInfo_1.WqtWbnbBlockInfo,
                WqtWbnbMintEvent_1.WqtWbnbMintEvent,
                WqtWbnbBurnEvent_1.WqtWbnbBurnEvent,
                Media_1.Media,
                QuestMedia_1.QuestMedia,
                MessageMedia_1.MessageMedia,
                ProposalMedia_1.ProposalMedia,
                PortfolioMedia_1.PortfolioMedia,
                QuestBlackList_1.QuestBlackList,
                DiscussionMedia_1.DiscussionMedia,
                QuestResponseMedia_1.QuestResponseMedia,
                DiscussionCommentMedia_1.DiscussionCommentMedia,
                Wallet_1.Wallet,
                PensionFundBlockInfo_1.PensionFundBlockInfo,
                PensionFundWithdrewEvent_1.PensionFundWithdrewEvent,
                PensionFundReceivedEvent_1.PensionFundReceivedEvent,
                PensionFundWalletUpdatedEvent_1.PensionFundWalletUpdatedEvent,
            ]
        });
        if (sync)
            yield sequelize.sync();
        return sequelize;
    });
}
exports.initDatabase = initDatabase;
__exportStar(require("./types"), exports);
__exportStar(require("./admin/types"), exports);
__exportStar(require("./Media"), exports);
__exportStar(require("./quest/Quest"), exports);
__exportStar(require("./quest/QuestsResponse"), exports);
__exportStar(require("./quest/QuestMedia"), exports);
__exportStar(require("./quest/QuestsReview"), exports);
__exportStar(require("./quest/QuestsStarred"), exports);
__exportStar(require("./quest/QuestsStatistic"), exports);
__exportStar(require("./quest/QuestSpecializationFilter"), exports);
__exportStar(require("./user/User"), exports);
__exportStar(require("./user/RatingStatistic"), exports);
__exportStar(require("./user/PortfolioMedia"), exports);
__exportStar(require("./user/Portfolio"), exports);
__exportStar(require("./user/Session"), exports);
__exportStar(require("./user/UserSpecializationFilter"), exports);
__exportStar(require("./admin/Admin"), exports);
__exportStar(require("./admin/AdminSession"), exports);
__exportStar(require("./chats/Chat"), exports);
__exportStar(require("./chats/ChatMember"), exports);
__exportStar(require("./chats/Message"), exports);
__exportStar(require("./chats/MessageMedia"), exports);
__exportStar(require("./chats/InfoMessage"), exports);
__exportStar(require("./chats/StarredMessage"), exports);
__exportStar(require("./chats/ChatsStatistic"), exports);
__exportStar(require("./chats/StarredChat"), exports);
__exportStar(require("./chats/QuestChat"), exports);
__exportStar(require("./quest/QuestDispute"), exports);
__exportStar(require("./bridge/BridgeParserBlockInfo"), exports);
__exportStar(require("./bridge/BridgeSwapTokenEvent"), exports);
__exportStar(require("./filtres/IndustryFilter"), exports);
__exportStar(require("./filtres/SpecializationFilter"), exports);
__exportStar(require("./discussion/DiscussionComment"), exports);
__exportStar(require("./discussion/DiscussionCommentLike"), exports);
__exportStar(require("./discussion/DiscussionCommentMedia"), exports);
__exportStar(require("./discussion/Discussion"), exports);
__exportStar(require("./discussion/DiscussionLike"), exports);
__exportStar(require("./discussion/DiscussionMedia"), exports);
__exportStar(require("./discussion/StarredDiscussion"), exports);
__exportStar(require("./dailyLiquidity/DailyLiquidity"), exports);
__exportStar(require("./proposal/Proposal"), exports);
__exportStar(require("./proposal/ProposalMedia"), exports);
__exportStar(require("./proposal/ProposalParseBlock"), exports);
__exportStar(require("./proposal/ProposalCreatedEvent"), exports);
__exportStar(require("./proposal/ProposalVoteCastEvent"), exports);
__exportStar(require("./proposal/ProposalExecutedEvent"), exports);
__exportStar(require("./quest/QuestResponseMedia"), exports);
__exportStar(require("./wallet/Wallet"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbSwapEvent"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbBlockInfo"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbBurnEvent"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbMintEvent"), exports);
__exportStar(require("./pensionFund/PensionFundBlockInfo"), exports);
__exportStar(require("./pensionFund/PensionFundReceivedEvent"), exports);
__exportStar(require("./pensionFund/PensionFundWalletUpdatedEvent"), exports);
__exportStar(require("./pensionFund/PensionFundWithdrewEvent"), exports);
__exportStar(require("./user/UserBlackList"), exports);
__exportStar(require("./quest/QuestBlackList"), exports);
__exportStar(require("./user/UserChangeRoleData"), exports);
__exportStar(require("./quest/QuestDisputeReview"), exports);
__exportStar(require("./admin/AdminRatingStatistic"), exports);
