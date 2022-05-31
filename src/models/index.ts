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
import {UserChatsStatistic} from "./chats/UserChatsStatistic";
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
import {Proposal} from "./proposal/Proposal";
import {ProposalMedia} from "./proposal/ProposalMedia";
import {ProposalParseBlock} from "./proposal/ProposalParseBlock";
import {ProposalCreatedEvent} from "./proposal/ProposalCreatedEvent";
import {ProposalVoteCastEvent} from "./proposal/ProposalVoteCastEvent";
import {ProposalExecutedEvent} from "./proposal/ProposalExecutedEvent";
import {QuestResponseMedia} from "./quest/QuestResponseMedia";
import {Wallet} from "./wallet/Wallet";
import {QuestRaiseView} from "./raise-view/QuestRaiseView";
import {WqtWbnbSwapEvent} from "./WqtWbnb/WqtWbnbSwapEvent";
import {WqtWbnbBlockInfo} from "./WqtWbnb/WqtWbnbBlockInfo";
import {QuestFactoryCreatedEvent} from "./quest/contract-quest-factory/QuestFactoryCreatedEvent";
import {QuestFactoryBlockInfo} from "./quest/contract-quest-factory/QuestFactoryBlockInfo";
import {PensionFundBlockInfo} from "./pensionFund/PensionFundBlockInfo";
import {PensionFundWithdrewEvent} from "./pensionFund/PensionFundWithdrewEvent";
import {PensionFundReceivedEvent} from "./pensionFund/PensionFundReceivedEvent";
import {PensionFundWalletUpdatedEvent} from "./pensionFund/PensionFundWalletUpdatedEvent";
import {UserBlackList} from "./user/UserBlackList";
import {QuestBlackList} from "./quest/QuestBlackList";
import {WqtWbnbBurnEvent} from "./WqtWbnb/WqtWbnbBurnEvent";
import {WqtWbnbMintEvent} from "./WqtWbnb/WqtWbnbMintEvent";
import {WqtWbnbSyncEvent} from "./WqtWbnb/WqtWbnbSyncEvent";
import {UserChangeRoleData} from "./user/UserChangeRoleData";
import {GroupChat} from "./chats/GroupChat";
import {ReferralProgramAffiliate} from "./referral-program/ReferralProgramAffiliate";
import {ReferralProgramReferral} from "./referral-program/ReferralProgramReferral";
import {ReferralProgramEventRewardClaimed} from "./referral-program/ReferralProgramEventRewardClaimed";
import {ReferralProgramEventPaidReferral} from "./referral-program/ReferralProgramEventPaidReferral";
import {ReferralProgramEventRegisteredAffiliate} from "./referral-program/ReferralProgramEventRegisteredAffiliate";
import {ReferralProgramParseBlock} from "./referral-program/ReferralProgramParseBlock";
import {QuestDisputeReview} from "./quest/QuestDisputeReview";
import {AdminActionMetadata} from "./admin/AdminActionMetadata";
import {AdminQuestDisputesStatistic} from "./admin/AdminQuestDisputesStatistic";
import {UserRaiseView} from "./raise-view/UserRaiseView";
import {QuestBlockInfo} from "./quest/contract-quest/QuestBlockInfo";
import {QuestAssignedEvent} from "./quest/contract-quest/QuestAssignedEvent";
import {QuestJobStartedEvent} from "./quest/contract-quest/QuestJobStartedEvent";
import {QuestJobDoneEvent} from "./quest/contract-quest/QuestJobDoneEvent";
import {QuestJobFinishedEvent} from "./quest/contract-quest/QuestJobFinishedEvent";
import {QuestJobCancelledEvent} from "./quest/contract-quest/QuestJobCancelledEvent";
import {QuestJobEditedEvent} from "./quest/contract-quest/QuestJobEditedEvent";
import {RaiseViewBlockInfo} from "./raise-view/RaiseViewBlockInfo";
import {RaiseViewPromotedUserEvent} from "./raise-view/RaiseViewPromotedUserEvent";
import {RaiseViewPromotedQuestEvent} from "./raise-view/RaiseViewPromotedQuestEvent";
import {SavingProductParseBlock} from "./saving-product/SavingProductParseBlock";
import {SavingProductBorrowedEvent} from "./saving-product/SavingProductBorrowedEvent";
import {SavingProductClaimedEvent} from "./saving-product/SavingProductClaimedEvent";
import {SavingProductReceivedEvent} from "./saving-product/SavingProductReceivedEvent";
import {SavingProductRefundedEvent} from "./saving-product/SavingProductRefundedEvent";
import {WqtWethSwapEvent} from "./WqtWeth/WqtWethSwapEvent";
import {WqtWethBlockInfo} from "./WqtWeth/WqtWethBlockInfo";
import {WqtWethMintEvent} from "./WqtWeth/WqtWethMintEvent";
import {WqtWethBurnEvent} from "./WqtWeth/WqtWethBurnEvent";
import {WqtWethSyncEvent} from "./WqtWeth/WqtWethSyncEvent";
import {DailyLiquidityWqtWbnb} from "./WqtWbnb/DailyLiquidityWqtWbnb";
import {DailyLiquidityWqtWeth} from "./WqtWeth/DailyLiquidityWqtWeth";
import {QuestArbitrationRejectWorkEvent} from "./quest/contract-quest/QuestArbitrationRejectWorkEvent";
import {QuestArbitrationAcceptWorkEvent} from "./quest/contract-quest/QuestArbitrationAcceptWorkEvent";
import {QuestArbitrationStartedEvent} from "./quest/contract-quest/QuestArbitrationStartedEvent";
import {QuestArbitrationReworkEvent} from "./quest/contract-quest/QuestArbitrationReworkEvent";
import {EmployerProfileVisibilitySetting} from "./user/EmployerProfileVisibilitySetting";
import {WorkerProfileVisibilitySetting} from "./user/WorkerProfileVisibilitySetting";
import {ChatData} from "./chats/ChatData";
import {ChatMemberData} from "./chats/ChatMemberData";
import {ChatMemberDeletionData} from "./chats/ChatMemberDeletionData";
import {AdminChatStatistic} from "./chats/AdminChatStatistic";
import {BridgeSwapUsdtTokenEvent} from "./bridge-usdt/BridgeSwapUsdtTokenEvent";
import {BridgeSwapUsdtParserBlockInfo} from "./bridge-usdt/BridgeSwapUsdtParserBlockInfo";
import {CommissionSettings} from "./platform-settings/CommissionSettings";
import {FirstWqtTransmissionData} from "./transaction-features/first-wqt/FirstWqtTransmissionData";
import {Transaction} from "./transaction-features/Transaction";
import {RaiseViewsPlatformStatistic} from "./platform-statistics/RaiseViewsPlatformStatistic";
import {DisputesPlatformStatistic} from "./platform-statistics/DisputesPlatformStatistic";
import {ReportsPlatformStatistic} from "./platform-statistics/ReportsPlatformStatistic";
import {UsersPlatformStatistic} from "./platform-statistics/UsersPlatformStatistic";
import {DaoPlatformStatistic} from "./platform-statistics/DaoPlatformStatistic";
import {QuestsPlatformStatistic} from "./platform-statistics/QuestsPlatformStatistic";

export const models = [
  /** User section */
  User,
  Session,
  Portfolio,
  QuestsReview,
  UserBlackList,
  UserChangeRoleData,
  WorkerProfileVisibilitySetting,
  EmployerProfileVisibilitySetting,


  /** Admin section */
  Admin,
  AdminSession,
  AdminActionMetadata,
  AdminQuestDisputesStatistic,


  /** Quest section */
  Quest,
  QuestChat,
  QuestDispute,
  QuestsStarred,
  QuestsResponse,
  QuestBlackList,
  QuestDisputeReview,
  QuestArbitrationReworkEvent,
  QuestArbitrationStartedEvent,
  QuestArbitrationAcceptWorkEvent,
  QuestArbitrationRejectWorkEvent,


  /** Quest factory contract events section */
  QuestFactoryBlockInfo,
  QuestFactoryCreatedEvent,


  /** Quest contract events section */
  QuestBlockInfo,
  QuestAssignedEvent,
  QuestJobStartedEvent,
  QuestJobDoneEvent,
  QuestJobFinishedEvent,
  QuestJobCancelledEvent,
  QuestJobEditedEvent,


  /** Chat section */
  Chat,
  Message,
  ChatData,
  GroupChat,
  ChatMember,
  InfoMessage,
  StarredChat,
  ChatMemberData,
  StarredMessage,
  ChatMemberDeletionData,


  /** Bridge section */
  BridgeParserBlockInfo,
  BridgeSwapTokenEvent,


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
  RatingStatistic,
  QuestsStatistic,
  UserChatsStatistic,
  AdminChatStatistic,


  /** WQT/WBNB liquidity */
  DailyLiquidityWqtWbnb,
  WqtWbnbSwapEvent,
  WqtWbnbBlockInfo,
  WqtWbnbMintEvent,
  WqtWbnbBurnEvent,
  WqtWbnbSyncEvent,


  /** WQT/WETH liquidity */
  DailyLiquidityWqtWeth,
  WqtWethSwapEvent,
  WqtWethBlockInfo,
  WqtWethMintEvent,
  WqtWethBurnEvent,
  WqtWethSyncEvent,


  /** Media section */
  Media,
  QuestMedia,
  MessageMedia,
  ProposalMedia,
  PortfolioMedia,
  DiscussionMedia,
  QuestResponseMedia,
  DiscussionCommentMedia,


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

  /** Saving Product */
  SavingProductParseBlock,
  SavingProductBorrowedEvent,
  SavingProductClaimedEvent,
  SavingProductReceivedEvent,
  SavingProductRefundedEvent,


  /** Raise view */
  UserRaiseView,
  RaiseViewPromotedUserEvent,
  RaiseViewPromotedQuestEvent,
  QuestRaiseView,
  RaiseViewBlockInfo,

  /** Swap USDT */
  BridgeSwapUsdtParserBlockInfo,
  BridgeSwapUsdtTokenEvent,

  /** Platform settings */
  CommissionSettings,

  /** Transaction features */
  Transaction,
  FirstWqtTransmissionData,

  /** Platform Statistics */
  RaiseViewsPlatformStatistic,
  DisputesPlatformStatistic,
  ReportsPlatformStatistic,
  QuestsPlatformStatistic,
  UsersPlatformStatistic,
  DaoPlatformStatistic,
] as const;

export async function initDatabase(dbLink: string, logging = false, sync = false) {
  const sequelize = new Sequelize(dbLink, {
    logging: logging ? console.log : logging,
    dialect: "postgres",
    models: [...models],
  });
  if (sync)
    await sequelize.sync();

  return sequelize;
}

export * from "./types";
export * from "./admin/types";
export * from "./proposal/types";
export * from "./raise-view/types";

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
export * from "./proposal/Proposal";
export * from "./proposal/ProposalMedia";
export * from "./proposal/ProposalParseBlock";
export * from "./proposal/ProposalCreatedEvent";
export * from "./proposal/ProposalVoteCastEvent";
export * from "./proposal/ProposalExecutedEvent";
export * from "./quest/QuestResponseMedia";
export * from "./wallet/Wallet";
export * from "./quest/contract-quest-factory/QuestFactoryCreatedEvent";
export * from "./quest/contract-quest-factory/QuestFactoryBlockInfo";
export * from "./WqtWbnb/DailyLiquidityWqtWbnb";
export * from "./WqtWbnb/WqtWbnbSwapEvent";
export * from "./WqtWbnb/WqtWbnbBlockInfo";
export * from "./WqtWbnb/WqtWbnbBurnEvent";
export * from "./WqtWbnb/WqtWbnbMintEvent";
export * from "./WqtWbnb/WqtWbnbSyncEvent";
export * from "./pensionFund/PensionFundBlockInfo";
export * from "./pensionFund/PensionFundReceivedEvent";
export * from "./pensionFund/PensionFundWalletUpdatedEvent";
export * from "./pensionFund/PensionFundWithdrewEvent";
export * from "./user/UserBlackList";
export * from "./quest/QuestBlackList";
export * from "./user/UserChangeRoleData";
export * from "./referral-program/ReferralProgramReferral";
export * from "./referral-program/ReferralProgramAffiliate";
export * from "./referral-program/ReferralProgramParseBlock";
export * from "./referral-program/ReferralProgramEventRewardClaimed";
export * from "./referral-program/ReferralProgramEventPaidReferral";
export * from "./referral-program/ReferralProgramEventRegisteredAffiliate";
export * from "./admin/AdminActionMetadata";
export * from "./quest/QuestDisputeReview";
export * from "./quest/contract-quest/QuestBlockInfo";
export * from "./quest/contract-quest/QuestAssignedEvent";
export * from "./quest/contract-quest/QuestJobStartedEvent";
export * from "./admin/AdminQuestDisputesStatistic"
export * from "./admin/AdminQuestDisputesStatistic";
export * from "./quest/contract-quest/QuestJobDoneEvent";
export * from "./quest/contract-quest/QuestJobFinishedEvent";
export * from "./quest/contract-quest/QuestJobCancelledEvent";
export * from "./quest/contract-quest/QuestJobEditedEvent";
export * from "./quest/contract-quest/QuestArbitrationRejectWorkEvent";
export * from "./quest/contract-quest/QuestArbitrationAcceptWorkEvent";
export * from "./quest/contract-quest/QuestArbitrationStartedEvent";
export * from "./quest/contract-quest/QuestArbitrationReworkEvent";
export * from "./saving-product/SavingProductParseBlock";
export * from "./saving-product/SavingProductBorrowedEvent";
export * from "./saving-product/SavingProductRefundedEvent";
export * from "./saving-product/SavingProductReceivedEvent";
export * from "./saving-product/SavingProductClaimedEvent";
export * from "./admin/AdminQuestDisputesStatistic";
export * from "./raise-view/RaiseViewPromotedUserEvent";
export * from "./raise-view/RaiseViewPromotedQuestEvent";
export * from "./raise-view/RaiseViewBlockInfo";
export * from "./raise-view/QuestRaiseView";
export * from "./raise-view/UserRaiseView";
export * from "./WqtWeth/DailyLiquidityWqtWeth";
export * from "./WqtWeth/WqtWethSwapEvent";
export * from "./WqtWeth/WqtWethBlockInfo";
export * from "./WqtWeth/WqtWethBurnEvent";
export * from "./WqtWeth/WqtWethMintEvent";
export * from "./WqtWeth/WqtWethSyncEvent";
export * from "./user/EmployerProfileVisibilitySetting";
export * from "./user/WorkerProfileVisibilitySetting";
export * from "./bridge-usdt/BridgeSwapUsdtParserBlockInfo";
export * from "./bridge-usdt/BridgeSwapUsdtTokenEvent";
export * from "./platform-settings/CommissionSettings"
export * from "./transaction-features/first-wqt/FirstWqtTransmissionData";
export * from "./transaction-features/Transaction";
export * from "./platform-statistics/RaiseViewsPlatformStatistic"
export * from "./platform-statistics/DisputesPlatformStatistic"
export * from "./platform-statistics/ReportsPlatformStatistic"
export * from "./platform-statistics/QuestsPlatformStatistic"
export * from "./platform-statistics/UsersPlatformStatistic"
export * from "./platform-statistics/DaoPlatformStatistic"

export * from "./chats/GroupChat";
export * from "./chats/ChatData";
export * from "./chats/ChatMemberData";
export * from "./chats/ChatMemberDeletionData";
export * from "./chats/AdminChatStatistic";
export * from "./chats/Chat";
export * from "./chats/ChatMember";
export * from "./chats/Message";
export * from "./chats/MessageMedia";
export * from "./chats/InfoMessage";
export * from "./chats/StarredMessage";
export * from "./chats/UserChatsStatistic";
export * from "./chats/StarredChat";
export * from "./chats/QuestChat";
