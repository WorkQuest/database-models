import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {User, UserStatus} from "../user/User";
import {Media} from "../Media";
import {RatingStatistic} from "../user/RatingStatistic";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["id", "userId"]
    },
  },
}))
@Table
export class QuestsStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column(DataType.INTEGER) completed: number;
  @Column(DataType.INTEGER) opened: number;

  @BelongsTo(() => User) user: User;
}
