import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class DisputesStatistic extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) count: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) pendingCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) createdCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) inProgressCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) acceptedWorkCount: number;
}
