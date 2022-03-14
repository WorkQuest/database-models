import {Sequelize} from "sequelize-typescript";
import {User} from "./user/User";
import {Session} from "./user/Session";
import {Quest} from "./quest/Quest";
import {QuestsResponse} from "./quest/QuestsResponse";
import {Media} from "./Media";
import {QuestMedia} from "./quest/QuestMedia";
import {QuestsReview} from "./quest/QuestsReview";
import {RatingStatistic} from "./user/RatingStatistic";
import {QuestsStarred} from './quest/QuestsStarred';
import {PortfolioMedia} from './user/PortfolioMedia';
import {Portfolio} from './user/Portfolio';
import {Admin} from './admin/Admin'
import {AdminSession} from "./admin/AdminSession";
import {Chat} from "./chats/Chat";
import {ChatMember} from "./chats/ChatMember";
import {ChatsStatistic} from "./chats/ChatsStatistic";
import {MessageMedia} from "./chats/MessageMedia";
import {Message} from "./chats/Message";
import {InfoMessage} from "./chats/InfoMessage";
import {StarredMessage} from "./chats/StarredMessage";
import {BridgeParserBlockInfo} from "./bridge/BridgeParserBlockInfo";
import {BridgeSwapTokenEvent} from "./bridge/BridgeSwapTokenEvent";
import {IndustryFilter} from "./filtres/IndustryFilter";
import {SpecializationFilter} from "./filtres/SpecializationFilter";
import {QuestSpecializationFilter} from "./quest/QuestSpecializationFilter";
import {UserSpecializationFilter} from "./user/UserSpecializationFilter";
import {DiscussionComment} from "./discussion/DiscussionComment";
import {DiscussionCommentLike} from "./discussion/DiscussionCommentLike";
import {DiscussionCommentMedia} from "./discussion/DiscussionCommentMedia";
import {Discussion} from "./discussion/Discussion";
import {DiscussionLike} from "./discussion/DiscussionLike";
import {DiscussionMedia} from "./discussion/DiscussionMedia";
import {StarredDiscussion} from "./discussion/StarredDiscussion";
import {StarredChat} from "./chats/StarredChat";
import {QuestChat} from "./chats/QuestChat";
import {QuestDispute} from "./quest/QuestDispute";
import {QuestsStatistic} from "./quest/QuestsStatistic";
import {DailyLiquidity} from "./dailyLiquidity/DailyLiquidity";
import {Proposal} from "./proposal/Proposal";
import {ProposalMedia} from "./proposal/ProposalMedia";
import {ProposalParseBlock} from "./proposal/ProposalParseBlock";
import {ProposalCreatedEvent} from "./proposal/ProposalCreatedEvent";
import {ProposalVoteCastEvent} from "./proposal/ProposalVoteCastEvent";
import {ProposalExecutedEvent} from "./proposal/ProposalExecutedEvent";
import {QuestResponseMedia} from "./quest/QuestResponseMedia";
import {Wallet} from "./wallet/Wallet";
import {WqtWbnbSwapEvent} from "./WqtWbnb/WqtWbnbSwapEvent";
import {WqtWbnbBlockInfo} from "./WqtWbnb/WqtWbnbBlockInfo";
import {PensionFundBlockInfo} from "./pensionFund/PensionFundBlockInfo";
import {PensionFundWithdrewEvent} from "./pensionFund/PensionFundWithdrewEvent";
import {PensionFundReceivedEvent} from "./pensionFund/PensionFundReceivedEvent";
import {PensionFundWalletUpdatedEvent} from "./pensionFund/PensionFundWalletUpdatedEvent";
import {UserBlackList} from "./user/UserBlackList";
import {QuestBlackList} from "./quest/QuestBlackList";
import {WqtWbnbBurnEvent} from "./WqtWbnb/WqtWbnbBurnEvent";
import {WqtWbnbMintEvent} from "./WqtWbnb/WqtWbnbMintEvent";
import {UserChangeRoleData} from "./user/UserChangeRoleData";
import {ReferralProgramAffiliate} from "./referral-program/ReferralProgramAffiliate";
import {ReferralProgramReferral} from "./referral-program/ReferralProgramReferral";
import {ReferralProgramEventRewardClaimed} from "./referral-program/ReferralProgramEventRewardClaimed";
import {ReferralProgramEventPaidReferral} from "./referral-program/ReferralProgramEventPaidReferral";
import {ReferralProgramEventRegisteredAffiliate} from "./referral-program/ReferralProgramEventRegisteredAffiliate";
import {ReferralProgramParseBlock} from "./referral-program/ReferralProgramParseBlock";
import {QuestDisputeReview} from "./quest/QuestDisputeReview";
import {AdminActionMetadata} from "./admin/AdminActionMetadata";
import {AdminQuestDisputesStatistic} from "./admin/AdminQuestDisputesStatistic";
import {UserRaiseView} from "./user/UserRaiseView";
import {WqtDelegateVotesChangedEvent} from "./wqt/WqtDelegateVotesChangedEvent";

export async function initDatabase(dbLink: string, logging = false, sync = false) {
  const sequelize = new Sequelize(dbLink, {
    logging: logging ? console.log : logging,
    dialect: "postgres",
    models: [
      /** User section */
      User,
      Session,
      QuestsReview,
      Portfolio,
      UserBlackList,
      UserChangeRoleData,
      UserRaiseView,


      /** Admin section */
      Admin,
      AdminActionMetadata,
      AdminSession,
      AdminQuestDisputesStatistic,


      /** Quest section */
      Quest,
      QuestChat,
      QuestDispute,
      QuestsStarred,
      QuestsResponse,
      QuestBlackList,
      QuestDisputeReview,


      /** Chat section */
      Chat,
      Message,
      ChatMember,
      InfoMessage,
      StarredChat,
      StarredMessage,


      /** Bridge section */
      BridgeParserBlockInfo,
      BridgeSwapTokenEvent,


      /** Daily pool liquidity section */
      DailyLiquidity,


      /** Discussion section */
      Discussion,
      DiscussionLike,
      StarredDiscussion,
      DiscussionComment,
      DiscussionCommentLike,


      /** Filter section */
      IndustryFilter,
      SpecializationFilter,
      UserSpecializationFilter,
      QuestSpecializationFilter,


      /** Proposal section */
      Proposal,
      ProposalParseBlock,
      ProposalCreatedEvent,
      ProposalVoteCastEvent,
      ProposalExecutedEvent,


      /** Statistic */
      ChatsStatistic,
      RatingStatistic,
      QuestsStatistic,


      /** WQT/WBNB liquidity */
      WqtWbnbSwapEvent,
      WqtWbnbBlockInfo,
      WqtWbnbMintEvent,
      WqtWbnbBurnEvent,


      /** Media section */
      Media,
      QuestMedia,
      MessageMedia,
      ProposalMedia,
      PortfolioMedia,
      DiscussionMedia,
      QuestResponseMedia,
      DiscussionCommentMedia,

      /** Wqt section */
      WqtDelegateVotesChangedEvent,

      /** Wallet */
      Wallet,

      /** Referral Program */
      ReferralProgramReferral,
      ReferralProgramAffiliate,


      /** Referral Program Contract */
      ReferralProgramParseBlock,
      ReferralProgramEventPaidReferral,
      ReferralProgramEventRewardClaimed,
      ReferralProgramEventRegisteredAffiliate,


      /** Pension fund */
      PensionFundBlockInfo,
      PensionFundWithdrewEvent,
      PensionFundReceivedEvent,
      PensionFundWalletUpdatedEvent,
    ]
  });
  if (sync)
    await sequelize.sync();

  return sequelize;
}

export * from "./types";
export * from "./admin/types";
export * from "./proposal/types";

export * from "./Media";
export * from "./quest/Quest";
export * from "./quest/QuestsResponse";
export * from "./quest/QuestMedia";
export * from "./quest/QuestsReview";
export * from "./quest/QuestsStarred";
export * from "./quest/QuestsStatistic";
export * from "./quest/QuestSpecializationFilter";
export * from "./user/User";
export * from "./user/RatingStatistic";
export * from "./user/PortfolioMedia";
export * from "./user/Portfolio";
export * from "./user/Session";
export * from "./user/UserSpecializationFilter";
export * from "./admin/Admin";
export * from "./admin/AdminSession";
export * from "./chats/Chat";
export * from "./chats/ChatMember";
export * from "./chats/Message";
export * from "./chats/MessageMedia";
export * from "./chats/InfoMessage";
export * from "./chats/StarredMessage";
export * from "./chats/ChatsStatistic";
export * from "./chats/StarredChat";
export * from "./chats/QuestChat";
export * from "./quest/QuestDispute";
export * from "./bridge/BridgeParserBlockInfo";
export * from "./bridge/BridgeSwapTokenEvent";
export * from "./filtres/IndustryFilter";
export * from "./filtres/SpecializationFilter";
export * from "./discussion/DiscussionComment";
export * from "./discussion/DiscussionCommentLike";
export * from "./discussion/DiscussionCommentMedia";
export * from "./discussion/Discussion";
export * from "./discussion/DiscussionLike";
export * from "./discussion/DiscussionMedia";
export * from "./discussion/StarredDiscussion";
export * from "./dailyLiquidity/DailyLiquidity";
export * from "./proposal/Proposal";
export * from "./proposal/ProposalMedia";
export * from "./proposal/ProposalParseBlock";
export * from "./proposal/ProposalCreatedEvent";
export * from "./proposal/ProposalVoteCastEvent";
export * from "./proposal/ProposalExecutedEvent";
export * from "./quest/QuestResponseMedia";
export * from "./wallet/Wallet";
export * from "./WqtWbnb/WqtWbnbSwapEvent";
export * from "./WqtWbnb/WqtWbnbBlockInfo";
export * from "./WqtWbnb/WqtWbnbBurnEvent";
export * from "./WqtWbnb/WqtWbnbMintEvent";
export * from "./pensionFund/PensionFundBlockInfo";
export * from "./pensionFund/PensionFundReceivedEvent";
export * from "./pensionFund/PensionFundWalletUpdatedEvent";
export * from "./pensionFund/PensionFundWithdrewEvent";
export * from "./user/UserBlackList";
export * from "./quest/QuestBlackList";
export * from "./user/UserChangeRoleData";
export * from "./referral-program/ReferralProgramAffiliate";
export * from "./referral-program/ReferralProgramReferral";
export * from "./referral-program/ReferralProgramParseBlock";
export * from "./referral-program/ReferralProgramEventRewardClaimed";
export * from "./referral-program/ReferralProgramEventPaidReferral";
export * from "./referral-program/ReferralProgramEventRegisteredAffiliate";
export * from "./admin/AdminActionMetadata";
export * from "./quest/QuestDisputeReview";
export * from "./admin/AdminQuestDisputesStatistic"
export * from "./user/UserRaiseView";
export * from "./wqt/WqtDelegateVotesChangedEvent";
