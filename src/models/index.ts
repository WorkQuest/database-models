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
import {StarredChat} from "./chats/StarredChat";
import {QuestChat} from "./chats/QuestChat";
import {QuestsStatistic} from "./quest/QuestsStatistic";
import {Proposal} from "./proposal/Proposal";
import {ProposalMedia} from "./proposal/ProposalMidia";
import {ProposalParseBlock} from "./proposal/ProposalParseBlock";

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
      PortfolioMedia,
      RatingStatistic,
      UserSpecializationFilter,
      /** Admin section */
      Admin,
      AdminSession,
      /** Quest section */
      Quest,
      QuestsResponse,
      QuestMedia,
      StarredQuests,
      QuestsStatistic,
      QuestSpecializationFilter,
      /** Chat section */
      Chat,
      StarredChat,
      ChatMember,
      Message,
      MessageMedia,
      InfoMessage,
      StarredMessage,
      /** Bridge section */
      BridgeParserBlockInfo,
      BridgeSwapTokenEvent,
      /** Discussion section */
      Discussion,
      DiscussionLike,
      DiscussionMedia,
      DiscussionComment,
      DiscussionCommentLike,
      DiscussionCommentMedia,
      /**proposal*/
      Proposal,
      ProposalMedia,
      ProposalParseBlock,
      /** Filter section */
      IndustryFilter,
      SpecializationFilter,
      /** Other */
      Media,
      QuestChat,
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
export * from "./quest/QuestSpecializationFilter";
export * from "./quest/StarredQuests";
export * from "./user/User";
export * from "./user/RatingStatistic";
export * from "./user/PortfolioMedia";
export * from "./user/Portfolio";
export * from "./user/Session";
export * from "./admin/Admin";
export * from "./admin/AdminSession";
export * from "./user/UserSpecializationFilter";
export * from "./chats/Chat";
export * from "./chats/ChatMember";
export * from "./chats/Message";
export * from "./chats/MessageMedia";
export * from "./chats/InfoMessage";
export * from "./chats/StarredMessage";
export * from "./chats/StarredChat";
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
export * from "./chats/QuestChat"
export * from "./quest/QuestsStatistic";
export * from "./proposal/Proposal";
export * from "./proposal/ProposalMidia";
export * from "./proposal/ProposalParseBlock"
