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
import {SkillFilter} from "./SkillFilter";
import {ParserInfo} from "./ParserInfo";

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
      SkillFilter,
      InfoMessage,
      StarredMessage,
      ParserInfo,
    ]
  });
  if (sync)
    await sequelize.sync();

  return sequelize;
}

export * from "./types";
export * from "./user/User";
export * from "./user/Session";
export * from "./quest/Quest";
export * from "./quest/QuestsResponse";
export * from "./Media";
export * from "./quest/QuestMedia";
export * from "./quest/Review";
export * from "./user/RatingStatistic";
export * from "./quest/StarredQuests";
export * from "./user/PortfolioMedia";
export * from "./user/Portfolio";
export * from "./user/Admin";
export * from "./user/AdminSession";
export * from "./chats/Chat";
export * from "./chats/ChatMember";
export * from "./chats/Message";
export * from "./chats/MessageMedia";
export * from "./chats/InfoMessage";
export * from "./chats/StarredMessage";
export * from "./SkillFilter";
export * from "./ParserInfo";


