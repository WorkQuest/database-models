import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class DisputesPlatformStatistic extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) total: number;

  // By dispute status region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) pending: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) created: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) inProgress: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) pendingResolved: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) resolved: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true }) date: Date;
}
