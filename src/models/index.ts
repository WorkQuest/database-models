import { Sequelize } from "sequelize-typescript";
import { User } from "./User";
import { Session } from "./Session";
import { Quest } from "./Quest";
import { QuestsResponse } from "./QuestsResponse";
import { Media } from "./Media";
import { QuestMedia } from "./QuestMedia";
import { Review } from "./Review";
import { RatingStatistic } from "./RatingStatistic";
import { StarredQuests } from './StarredQuests';
import { PortfolioMedia } from './PortfolioMedia';
import { Portfolio } from './Portfolio';
import { Admin } from './Admin'
import { AdminSession } from "./AdminSession";
import { Chat } from "./chats/Chat";
import { ChatMember } from "./chats/ChatMember";
import { MessageMedia } from "./chats/MessageMedia";
import { Message } from "./chats/Message";
import { InfoMessage } from "./chats/InfoMessage";
import { StarredMessage } from "./chats/StarredMessage";
import { SkillFilter } from "./SkillFilter";
import { StarredChat } from "./chats/StarredChat";

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
      StarredChat,
    ]
  });
  if (sync)
    await sequelize.sync();

  return sequelize;
}

export * from "./User";
export * from "./Session";
export * from "./Quest";
export * from "./QuestsResponse";
export * from "./Media";
export * from "./QuestMedia";
export * from "./Review";
export * from "./RatingStatistic";
export * from "./StarredQuests";
export * from "./PortfolioMedia";
export * from "./Portfolio";
export * from "./Admin";
export * from "./AdminSession";
export * from "./chats/Chat";
export * from "./chats/ChatMember";
export * from "./chats/Message";
export * from "./chats/MessageMedia";
export * from "./chats/InfoMessage";
export * from "./chats/StarredMessage";
export * from "./chats/StarredChat"
export * from "./SkillFilter"
