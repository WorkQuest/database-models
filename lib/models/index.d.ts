import { Sequelize } from "sequelize-typescript";
export { User } from "./User";
export { Session } from "./Session";
export { Point } from "./Point";
export declare function initDatabase(dbLink: string, logging?: boolean, sync?: boolean): Promise<{
    sequelize: Sequelize;
}>;
