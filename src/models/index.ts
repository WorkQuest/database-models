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
import { QuestDispute } from "./QuestDispute";

export async function initDatabase(dbLink: string, logging = false, sync = false) {
  const sequelize = new Sequelize(dbLink, {
    logging,
    dialect: "postgres",
    models: [ StarredQuests,
      User,
      Session,
      Quest,
      QuestsResponse,
      Media,
      QuestMedia,
      Review,
      RatingStatistic,
      Portfolio,
      PortfolioMedia,
      Admin,
      AdminSession,
      QuestDispute,
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
export * from "./QuestDispute";


