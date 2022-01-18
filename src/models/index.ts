import {Sequelize} from "sequelize-typescript";
import {User} from "./user/User";
import {Session} from "./user/Session";
import {Quest} from "./quest/Quest";
import {QuestsResponse} from "./quest/QuestsResponse";
import {Media} from "./Media";
import {QuestMedia} from "./quest/QuestMedia";
import {Review} from "./quest/Review";
import {RatingStatistic} from "./user/RatingStatistic";
import {StarredQuests} from './quest/StarredQuests';
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
import {WqtWbnbSwapEven} from "./SwapEvent/WqtWbnbSwapEven";

export async function initDatabase(dbLink: string, logging = false, sync = false) {
  const sequelize = new Sequelize(dbLink, {
    logging: logging ? console.log : logging,
    dialect: "postgres",
    models: [
      /** User section */
      User,
      Session,
      Review,
      Portfolio,


      /** Admin section */
      Admin,
      AdminSession,


      /** Quest section */
      Quest,
      QuestChat,
      QuestDispute,
      StarredQuests,
      QuestsResponse,


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

      /** SwapParser */
      WqtWbnbSwapEven,

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
    ]
  });
  if (sync)
    await sequelize.sync();

  return sequelize;
}

export * from "./types";
export * from "./Media";
export * from "./quest/Quest";
export * from "./quest/QuestsResponse";
export * from "./quest/QuestMedia";
export * from "./quest/Review";
export * from "./quest/StarredQuests";
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
export * from "./SwapEvent/WqtWbnbSwapEven";
