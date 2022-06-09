import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class ReportsPlatformStatistic extends Model {
  // Reports to user region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) users: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) declinedUsers: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) decidedUsers: number;

  // Reports to quest region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) quests: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) declinedQuests: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) decidedQuests: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true }) date: Date;
}
