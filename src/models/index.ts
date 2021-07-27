import { Sequelize} from "sequelize-typescript";
import { User } from "./User";
import { Session } from "./Session";
import { Point } from "./Point";

export { User } from "./User";
export { Session } from "./Session";
export { Point } from "./Point";
export async function initDatabase(
  dbLink: string,
  logging = false,
  sync: boolean = false
) {
  let sequelize: Sequelize;

  sequelize = new Sequelize(dbLink, {
    dialect: "postgres",
    models: [
      User,
      Session,
      Point,
    ],
    logging: logging,
  });

  if (sync) await sequelize.sync();

  return { sequelize };
}