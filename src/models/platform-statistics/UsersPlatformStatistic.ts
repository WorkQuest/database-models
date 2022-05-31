import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class UsersPlatformStatistic extends Model {
  // Register region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) registered: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) finished: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) unfinished: number;

  // Roles region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) workers: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) employers: number;

  // Social Networks region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) linkedin: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) twitter: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) facebook: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) google: number;

  // Verification region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) smsPassed: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) smsFailed: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) kycPassed: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) kycFailed: number;

  // Session region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) useWeb: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) useApp: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) useWallet: number;

  // Security region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) use2FA: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true }) date: Date;
}