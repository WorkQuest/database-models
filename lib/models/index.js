"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const UserChatsStatistic_1 = require("./chats/UserChatsStatistic");
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
const DailyLiquidity_1 = require("./daily-liquidity/DailyLiquidity");
const Proposal_1 = require("./proposal/Proposal");
const ProposalMedia_1 = require("./proposal/ProposalMedia");
const ProposalParseBlock_1 = require("./proposal/ProposalParseBlock");
const ProposalCreatedEvent_1 = require("./proposal/ProposalCreatedEvent");
const ProposalVoteCastEvent_1 = require("./proposal/ProposalVoteCastEvent");
const ProposalExecutedEvent_1 = require("./proposal/ProposalExecutedEvent");
const QuestResponseMedia_1 = require("./quest/QuestResponseMedia");
const Wallet_1 = require("./wallet/Wallet");
const QuestRaiseView_1 = require("./raise-view/QuestRaiseView");
const WqtWbnbSwapEvent_1 = require("./WqtWbnb/WqtWbnbSwapEvent");
const WqtWbnbBlockInfo_1 = require("./WqtWbnb/WqtWbnbBlockInfo");
const QuestFactoryCreatedEvent_1 = require("./quest/contract-quest-factory/QuestFactoryCreatedEvent");
const QuestFactoryBlockInfo_1 = require("./quest/contract-quest-factory/QuestFactoryBlockInfo");
const PensionFundBlockInfo_1 = require("./pensionFund/PensionFundBlockInfo");
const PensionFundWithdrewEvent_1 = require("./pensionFund/PensionFundWithdrewEvent");
const PensionFundReceivedEvent_1 = require("./pensionFund/PensionFundReceivedEvent");
const PensionFundWalletUpdatedEvent_1 = require("./pensionFund/PensionFundWalletUpdatedEvent");
const UserBlackList_1 = require("./user/UserBlackList");
const QuestBlackList_1 = require("./quest/QuestBlackList");
const WqtWbnbBurnEvent_1 = require("./WqtWbnb/WqtWbnbBurnEvent");
const WqtWbnbMintEvent_1 = require("./WqtWbnb/WqtWbnbMintEvent");
const WqtWbnbSyncEvent_1 = require("./WqtWbnb/WqtWbnbSyncEvent");
const UserChangeRoleData_1 = require("./user/UserChangeRoleData");
const GroupChat_1 = require("./chats/GroupChat");
const ReferralProgramAffiliate_1 = require("./referral-program/ReferralProgramAffiliate");
const ReferralProgramReferral_1 = require("./referral-program/ReferralProgramReferral");
const ReferralProgramEventRewardClaimed_1 = require("./referral-program/ReferralProgramEventRewardClaimed");
const ReferralProgramEventPaidReferral_1 = require("./referral-program/ReferralProgramEventPaidReferral");
const ReferralProgramEventRegisteredAffiliate_1 = require("./referral-program/ReferralProgramEventRegisteredAffiliate");
const ReferralProgramParseBlock_1 = require("./referral-program/ReferralProgramParseBlock");
const QuestDisputeReview_1 = require("./quest/QuestDisputeReview");
const AdminActionMetadata_1 = require("./admin/AdminActionMetadata");
const AdminQuestDisputesStatistic_1 = require("./admin/AdminQuestDisputesStatistic");
const UserRaiseView_1 = require("./raise-view/UserRaiseView");
const QuestBlockInfo_1 = require("./quest/contract-quest/QuestBlockInfo");
const QuestAssignedEvent_1 = require("./quest/contract-quest/QuestAssignedEvent");
const QuestJobStartedEvent_1 = require("./quest/contract-quest/QuestJobStartedEvent");
const QuestJobDoneEvent_1 = require("./quest/contract-quest/QuestJobDoneEvent");
const QuestJobFinishedEvent_1 = require("./quest/contract-quest/QuestJobFinishedEvent");
const QuestJobCancelledEvent_1 = require("./quest/contract-quest/QuestJobCancelledEvent");
const QuestJobEditedEvent_1 = require("./quest/contract-quest/QuestJobEditedEvent");
const RaiseViewBlockInfo_1 = require("./raise-view/RaiseViewBlockInfo");
const RaiseViewPromotedUserEvent_1 = require("./raise-view/RaiseViewPromotedUserEvent");
const RaiseViewPromotedQuestEvent_1 = require("./raise-view/RaiseViewPromotedQuestEvent");
const ProfileVisibilitySetting_1 = require("./user/ProfileVisibilitySetting");
const SavingProductParseBlock_1 = require("./saving-product/SavingProductParseBlock");
const SavingProductBorrowedEvent_1 = require("./saving-product/SavingProductBorrowedEvent");
const SavingProductClaimedEvent_1 = require("./saving-product/SavingProductClaimedEvent");
const SavingProductReceivedEvent_1 = require("./saving-product/SavingProductReceivedEvent");
const SavingProductRefundedEvent_1 = require("./saving-product/SavingProductRefundedEvent");
const ChatData_1 = require("./chats/ChatData");
const ChatMemberData_1 = require("./chats/ChatMemberData");
const ChatMemberDeletionData_1 = require("./chats/ChatMemberDeletionData");
const AdminChatStatistic_1 = require("./chats/AdminChatStatistic");
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
                ProfileVisibilitySetting_1.ProfileVisibilitySetting,
                Admin_1.Admin,
                AdminSession_1.AdminSession,
                AdminActionMetadata_1.AdminActionMetadata,
                AdminQuestDisputesStatistic_1.AdminQuestDisputesStatistic,
                Quest_1.Quest,
                QuestChat_1.QuestChat,
                QuestDispute_1.QuestDispute,
                QuestsStarred_1.QuestsStarred,
                QuestsResponse_1.QuestsResponse,
                QuestBlackList_1.QuestBlackList,
                QuestDisputeReview_1.QuestDisputeReview,
                QuestFactoryBlockInfo_1.QuestFactoryBlockInfo,
                QuestFactoryCreatedEvent_1.QuestFactoryCreatedEvent,
                QuestBlockInfo_1.QuestBlockInfo,
                QuestAssignedEvent_1.QuestAssignedEvent,
                QuestJobStartedEvent_1.QuestJobStartedEvent,
                QuestJobDoneEvent_1.QuestJobDoneEvent,
                QuestJobFinishedEvent_1.QuestJobFinishedEvent,
                QuestJobCancelledEvent_1.QuestJobCancelledEvent,
                QuestJobEditedEvent_1.QuestJobEditedEvent,
                Chat_1.Chat,
                Message_1.Message,
                ChatData_1.ChatData,
                GroupChat_1.GroupChat,
                ChatMember_1.ChatMember,
                InfoMessage_1.InfoMessage,
                StarredChat_1.StarredChat,
                ChatMemberData_1.ChatMemberData,
                StarredMessage_1.StarredMessage,
                ChatMemberDeletionData_1.ChatMemberDeletionData,
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
                RatingStatistic_1.RatingStatistic,
                QuestsStatistic_1.QuestsStatistic,
                UserChatsStatistic_1.UserChatsStatistic,
                AdminChatStatistic_1.AdminChatStatistic,
                WqtWbnbSwapEvent_1.WqtWbnbSwapEvent,
                WqtWbnbBlockInfo_1.WqtWbnbBlockInfo,
                WqtWbnbMintEvent_1.WqtWbnbMintEvent,
                WqtWbnbBurnEvent_1.WqtWbnbBurnEvent,
                WqtWbnbSyncEvent_1.WqtWbnbSyncEvent,
                Media_1.Media,
                QuestMedia_1.QuestMedia,
                MessageMedia_1.MessageMedia,
                ProposalMedia_1.ProposalMedia,
                PortfolioMedia_1.PortfolioMedia,
                DiscussionMedia_1.DiscussionMedia,
                QuestResponseMedia_1.QuestResponseMedia,
                DiscussionCommentMedia_1.DiscussionCommentMedia,
                Wallet_1.Wallet,
                ReferralProgramReferral_1.ReferralProgramReferral,
                ReferralProgramAffiliate_1.ReferralProgramAffiliate,
                ReferralProgramParseBlock_1.ReferralProgramParseBlock,
                ReferralProgramEventPaidReferral_1.ReferralProgramEventPaidReferral,
                ReferralProgramEventRewardClaimed_1.ReferralProgramEventRewardClaimed,
                ReferralProgramEventRegisteredAffiliate_1.ReferralProgramEventRegisteredAffiliate,
                PensionFundBlockInfo_1.PensionFundBlockInfo,
                PensionFundWithdrewEvent_1.PensionFundWithdrewEvent,
                PensionFundReceivedEvent_1.PensionFundReceivedEvent,
                PensionFundWalletUpdatedEvent_1.PensionFundWalletUpdatedEvent,
                SavingProductParseBlock_1.SavingProductParseBlock,
                SavingProductBorrowedEvent_1.SavingProductBorrowedEvent,
                SavingProductClaimedEvent_1.SavingProductClaimedEvent,
                SavingProductReceivedEvent_1.SavingProductReceivedEvent,
                SavingProductRefundedEvent_1.SavingProductRefundedEvent,
                UserRaiseView_1.UserRaiseView,
                RaiseViewPromotedUserEvent_1.RaiseViewPromotedUserEvent,
                RaiseViewPromotedQuestEvent_1.RaiseViewPromotedQuestEvent,
                QuestRaiseView_1.QuestRaiseView,
                RaiseViewBlockInfo_1.RaiseViewBlockInfo,
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
__exportStar(require("./proposal/types"), exports);
__exportStar(require("./raise-view/types"), exports);
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
__exportStar(require("./chats/UserChatsStatistic"), exports);
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
__exportStar(require("./daily-liquidity/DailyLiquidity"), exports);
__exportStar(require("./proposal/Proposal"), exports);
__exportStar(require("./proposal/ProposalMedia"), exports);
__exportStar(require("./proposal/ProposalParseBlock"), exports);
__exportStar(require("./proposal/ProposalCreatedEvent"), exports);
__exportStar(require("./proposal/ProposalVoteCastEvent"), exports);
__exportStar(require("./proposal/ProposalExecutedEvent"), exports);
__exportStar(require("./quest/QuestResponseMedia"), exports);
__exportStar(require("./wallet/Wallet"), exports);
__exportStar(require("./quest/contract-quest-factory/QuestFactoryCreatedEvent"), exports);
__exportStar(require("./quest/contract-quest-factory/QuestFactoryBlockInfo"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbSwapEvent"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbBlockInfo"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbBurnEvent"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbMintEvent"), exports);
__exportStar(require("./WqtWbnb/WqtWbnbSyncEvent"), exports);
__exportStar(require("./pensionFund/PensionFundBlockInfo"), exports);
__exportStar(require("./pensionFund/PensionFundReceivedEvent"), exports);
__exportStar(require("./pensionFund/PensionFundWalletUpdatedEvent"), exports);
__exportStar(require("./pensionFund/PensionFundWithdrewEvent"), exports);
__exportStar(require("./user/UserBlackList"), exports);
__exportStar(require("./quest/QuestBlackList"), exports);
__exportStar(require("./user/UserChangeRoleData"), exports);
__exportStar(require("./chats/GroupChat"), exports);
__exportStar(require("./referral-program/ReferralProgramAffiliate"), exports);
__exportStar(require("./referral-program/ReferralProgramReferral"), exports);
__exportStar(require("./referral-program/ReferralProgramAffiliate"), exports);
__exportStar(require("./referral-program/ReferralProgramParseBlock"), exports);
__exportStar(require("./referral-program/ReferralProgramEventRewardClaimed"), exports);
__exportStar(require("./referral-program/ReferralProgramEventPaidReferral"), exports);
__exportStar(require("./referral-program/ReferralProgramEventRegisteredAffiliate"), exports);
__exportStar(require("./admin/AdminActionMetadata"), exports);
__exportStar(require("./quest/QuestDisputeReview"), exports);
__exportStar(require("./quest/contract-quest/QuestBlockInfo"), exports);
__exportStar(require("./quest/contract-quest/QuestAssignedEvent"), exports);
__exportStar(require("./quest/contract-quest/QuestJobStartedEvent"), exports);
__exportStar(require("./admin/AdminQuestDisputesStatistic"), exports);
__exportStar(require("./admin/AdminQuestDisputesStatistic"), exports);
__exportStar(require("./quest/contract-quest/QuestJobDoneEvent"), exports);
__exportStar(require("./quest/contract-quest/QuestJobFinishedEvent"), exports);
__exportStar(require("./quest/contract-quest/QuestJobCancelledEvent"), exports);
__exportStar(require("./quest/contract-quest/QuestJobEditedEvent"), exports);
__exportStar(require("./user/ProfileVisibilitySetting"), exports);
__exportStar(require("./saving-product/SavingProductParseBlock"), exports);
__exportStar(require("./saving-product/SavingProductBorrowedEvent"), exports);
__exportStar(require("./saving-product/SavingProductRefundedEvent"), exports);
__exportStar(require("./saving-product/SavingProductReceivedEvent"), exports);
__exportStar(require("./saving-product/SavingProductClaimedEvent"), exports);
__exportStar(require("./admin/AdminQuestDisputesStatistic"), exports);
__exportStar(require("./user/ProfileVisibilitySetting"), exports);
__exportStar(require("./raise-view/RaiseViewPromotedUserEvent"), exports);
__exportStar(require("./raise-view/RaiseViewPromotedQuestEvent"), exports);
__exportStar(require("./raise-view/RaiseViewBlockInfo"), exports);
__exportStar(require("./raise-view/QuestRaiseView"), exports);
__exportStar(require("./raise-view/UserRaiseView"), exports);
__exportStar(require("./chats/ChatData"), exports);
__exportStar(require("./chats/ChatMemberData"), exports);
__exportStar(require("./chats/ChatMemberDeletionData"), exports);
__exportStar(require("./chats/AdminChatStatistic"), exports);
