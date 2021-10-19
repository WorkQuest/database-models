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
import {Admin} from './user/Admin'
import {AdminSession} from "./user/AdminSession";
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

export async function initDatabase(dbLink: string, logging = false, sync = false) {
  const sequelize = new Sequelize(dbLink, {
    logging,
    dialect: "postgres",
    models: [
      User,
      Session,
      Quest,
      StarredQuests,
      QuestsResponse,
      Media,
      QuestMedia,
      Review,
      RatingStatistic,
      Portfolio,
      PortfolioMedia,
      Admin,
      AdminSession,
      Chat,
      ChatMember,
      Message,
      MessageMedia,
      InfoMessage,
      StarredMessage,
      BridgeParserBlockInfo,
      BridgeSwapTokenEvent,
      IndustryFilter,
      SpecializationFilter,
      QuestSpecializationFilter,
      UserSpecializationFilter,
      ForumPostComment,
      ForumPostCommentLike,
      ForumPostCommentMedia,
      ForumPost,
      ForumPostLike,
      ForumPostMedia,
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
export * from "./user/Admin";
export * from "./user/AdminSession";
export * from "./user/UserSpecializationFilter";
export * from "./chats/Chat";
export * from "./chats/ChatMember";
export * from "./chats/Message";
export * from "./chats/MessageMedia";
export * from "./chats/InfoMessage";
export * from "./chats/StarredMessage";
export * from "./bridge/BridgeParserBlockInfo";
export * from "./bridge/BridgeSwapTokenEvent";
export * from "./filtres/IndustryFilter";
export * from "./filtres/SpecializationFilter";
