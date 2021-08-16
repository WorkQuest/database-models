import { Sequelize } from "sequelize-typescript";
export declare function initDatabase(dbLink: string, logging?: boolean, sync?: boolean): Promise<Sequelize>;
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
export * from "./Chat";
export * from "./ChatMember";
export * from "./Message";
export * from "./MessageMedia";
export * from "./QuestDispute";
export * from "./UserBlockReason";
