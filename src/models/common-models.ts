import { User } from "./user/User";
import { Session } from "./user/Session";
import { QuestsReview } from "./quest/QuestsReview";
import { Portfolio } from "./user/Portfolio";
import { UserBlackList } from "./user/UserBlackList";
import { UserChangeRoleData } from "./user/UserChangeRoleData";
import { Admin } from "./admin/Admin";
import { AdminSession } from "./admin/AdminSession";
import { AdminActionMetadata } from "./admin/AdminActionMetadata";
import { AdminQuestDisputesStatistic } from "./admin/AdminQuestDisputesStatistic";
import { Quest } from "./quest/Quest";
import { QuestChat } from "./chats/QuestChat";
import { QuestDispute } from "./quest/QuestDispute";
import { QuestsStarred } from "./quest/QuestsStarred";
import { QuestsResponse } from "./quest/QuestsResponse";
import { QuestBlackList } from "./quest/QuestBlackList";
import { QuestDisputeReview } from "./quest/QuestDisputeReview";
import { QuestFactoryBlockInfo } from "./quest/contract-quest-factory/QuestFactoryBlockInfo";
import { QuestFactoryCreatedEvent } from "./quest/contract-quest-factory/QuestFactoryCreatedEvent";
import { QuestBlockInfo } from "./quest/contract-quest/QuestBlockInfo";
import { QuestAssignedEvent } from "./quest/contract-quest/QuestAssignedEvent";
import { QuestJobStartedEvent } from "./quest/contract-quest/QuestJobStartedEvent";
import { QuestJobDoneEvent } from "./quest/contract-quest/QuestJobDoneEvent";
import { QuestJobFinishedEvent } from "./quest/contract-quest/QuestJobFinishedEvent";
import { QuestJobCancelledEvent } from "./quest/contract-quest/QuestJobCancelledEvent";
import { QuestJobEditedEvent } from "./quest/contract-quest/QuestJobEditedEvent";
import { Chat } from "./chats/Chat";
import { Message } from "./chats/Message";
import { ChatData } from "./chats/ChatData";
import { GroupChat } from "./chats/GroupChat";
import { ChatMember } from "./chats/ChatMember";
import { InfoMessage } from "./chats/InfoMessage";
import { StarredChat } from "./chats/StarredChat";
import { ChatMemberData } from "./chats/ChatMemberData";
import { StarredMessage } from "./chats/StarredMessage";
import { ChatMemberDeletionData } from "./chats/ChatMemberDeletionData";
import { BridgeParserBlockInfo } from "./bridge/BridgeParserBlockInfo";
import { BridgeSwapTokenEvent } from "./bridge/BridgeSwapTokenEvent";
import { Discussion } from "./discussion/Discussion";
import { DiscussionLike } from "./discussion/DiscussionLike";
import { StarredDiscussion } from "./discussion/StarredDiscussion";
import { DiscussionComment } from "./discussion/DiscussionComment";
import { DiscussionCommentLike } from "./discussion/DiscussionCommentLike";
import { IndustryFilter } from "./filtres/IndustryFilter";
import { SpecializationFilter } from "./filtres/SpecializationFilter";
import { UserSpecializationFilter } from "./user/UserSpecializationFilter";
import { QuestSpecializationFilter } from "./quest/QuestSpecializationFilter";
import { Proposal } from "./proposal/Proposal";
import { ProposalParseBlock } from "./proposal/ProposalParseBlock";
import { ProposalCreatedEvent } from "./proposal/ProposalCreatedEvent";
import { ProposalVoteCastEvent } from "./proposal/ProposalVoteCastEvent";
import { ProposalExecutedEvent } from "./proposal/ProposalExecutedEvent";
import { RatingStatistic } from "./user/RatingStatistic";
import { QuestsStatistic } from "./quest/QuestsStatistic";
import { UserChatsStatistic } from "./chats/UserChatsStatistic";
import { AdminChatStatistic } from "./chats/AdminChatStatistic";
import { DailyLiquidityWqtWbnb } from "./WqtWbnb/DailyLiquidityWqtWbnb";
import { WqtWbnbSwapEvent } from "./WqtWbnb/WqtWbnbSwapEvent";
import { WqtWbnbBlockInfo } from "./WqtWbnb/WqtWbnbBlockInfo";
import { WqtWbnbMintEvent } from "./WqtWbnb/WqtWbnbMintEvent";
import { WqtWbnbBurnEvent } from "./WqtWbnb/WqtWbnbBurnEvent";
import { WqtWbnbSyncEvent } from "./WqtWbnb/WqtWbnbSyncEvent";
import { DailyLiquidityWqtWeth } from "./WqtWeth/DailyLiquidityWqtWeth";
import { WqtWethSwapEvent } from "./WqtWeth/WqtWethSwapEvent";
import { WqtWethBlockInfo } from "./WqtWeth/WqtWethBlockInfo";
import { WqtWethMintEvent } from "./WqtWeth/WqtWethMintEvent";
import { WqtWethBurnEvent } from "./WqtWeth/WqtWethBurnEvent";
import { WqtWethSyncEvent } from "./WqtWeth/WqtWethSyncEvent";
import { Media } from "./Media";
import { QuestMedia } from "./quest/QuestMedia";
import { MessageMedia } from "./chats/MessageMedia";
import { ProposalMedia } from "./proposal/ProposalMedia";
import { PortfolioMedia } from "./user/PortfolioMedia";
import { DiscussionMedia } from "./discussion/DiscussionMedia";
import { QuestResponseMedia } from "./quest/QuestResponseMedia";
import { DiscussionCommentMedia } from "./discussion/DiscussionCommentMedia";
import { Wallet } from "./wallet/Wallet";
import { ReferralProgramReferral } from "./referral-program/ReferralProgramReferral";
import { ReferralProgramAffiliate } from "./referral-program/ReferralProgramAffiliate";
import { ReferralProgramParseBlock } from "./referral-program/ReferralProgramParseBlock";
import { ReferralProgramEventPaidReferral } from "./referral-program/ReferralProgramEventPaidReferral";
import { ReferralProgramEventRewardClaimed } from "./referral-program/ReferralProgramEventRewardClaimed";
import { ReferralProgramEventRegisteredAffiliate } from "./referral-program/ReferralProgramEventRegisteredAffiliate";
import { PensionFundBlockInfo } from "./pensionFund/PensionFundBlockInfo";
import { PensionFundWithdrewEvent } from "./pensionFund/PensionFundWithdrewEvent";
import { PensionFundReceivedEvent } from "./pensionFund/PensionFundReceivedEvent";
import { PensionFundWalletUpdatedEvent } from "./pensionFund/PensionFundWalletUpdatedEvent";
import { SavingProductParseBlock } from "./saving-product/SavingProductParseBlock";
import { SavingProductBorrowedEvent } from "./saving-product/SavingProductBorrowedEvent";
import { SavingProductClaimedEvent } from "./saving-product/SavingProductClaimedEvent";
import { SavingProductReceivedEvent } from "./saving-product/SavingProductReceivedEvent";
import { SavingProductRefundedEvent } from "./saving-product/SavingProductRefundedEvent";
import { UserRaiseView } from "./raise-view/UserRaiseView";
import { RaiseViewPromotedUserEvent } from "./raise-view/RaiseViewPromotedUserEvent";
import { RaiseViewPromotedQuestEvent } from "./raise-view/RaiseViewPromotedQuestEvent";
import { QuestRaiseView } from "./raise-view/QuestRaiseView";
import { RaiseViewBlockInfo } from "./raise-view/RaiseViewBlockInfo";
import { EmployerProfileVisibilitySetting } from "./user/EmployerProfileVisibilitySetting";
import { WorkerProfileVisibilitySetting } from "./user/WorkerProfileVisibilitySetting";


export default [
  /** User section */
  User,
  Session,
  QuestsReview,
  Portfolio,
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
]
