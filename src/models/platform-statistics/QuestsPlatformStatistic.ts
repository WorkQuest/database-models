import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class QuestsPlatformStatistic extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) total: number;

  // By quest status region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) closed: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) dispute: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) blocked: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) pending: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) recruitment: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) waitingForConfirmFromWorkerOnAssign: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) executionOfWork: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) waitingForEmployerConfirmationWork: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) completed: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true }) date: Date;
}
