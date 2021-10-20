import {getUUID} from "../../utils";
import {User} from "../user/User";
import {Discussion} from "./Discussion";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class DiscussionLike extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Discussion)
  @Column ({type:DataType.STRING, allowNull: false}) discussionId: string;

  @ForeignKey(() => User)
  @Column ({type:DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Discussion) discussion: Discussion;
}
