import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class ReportsStatistic extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) questsCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) usersCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) declinedUsersCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) declinedQuestsCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) acceptedUsersCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) acceptedQuestsCount: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now() }) date: Date;
}
