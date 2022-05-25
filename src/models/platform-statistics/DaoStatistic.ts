import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class DaoStatistic extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) votesCount: number;
  @Column({ type: DataType.FLOAT, defaultValue: 0 }) votesForPercent: number;
  @Column({ type: DataType.FLOAT, defaultValue: 0 }) votesAgainPercent: number;
  @Column({ type: DataType.DECIMAL, defaultValue: '0' }) delegatedValue: string;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now() }) date: Date;
}
