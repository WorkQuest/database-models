import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class QuestsStatistic extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) count: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) closedStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) disputeStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) blockedStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) pendingStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) recruitmentStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) waitingForConfirmFromWorkerOnAssignStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) executionOfWorkStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) waitingForEmployerConfirmationWorkStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) completedStatusCount: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) reportsCount: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now() }) date: Date;
}
