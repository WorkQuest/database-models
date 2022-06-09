import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class RaiseViewsPlatformStatistic extends Model {
  // Users region
  @Column({ type: DataType.DECIMAL, defaultValue: '0' }) profilesSum: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) profilesTotal: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) profilesGoldPlus: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) profilesGold: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) profilesSilver: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) profilesBronze: number;

  // Quests region
  @Column({ type: DataType.DECIMAL, defaultValue: '0' }) questsSum: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) questsTotal: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) questsGoldPlus: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) questsGold: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) questsSilver: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) questsBronze: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true }) date: Date;
}
