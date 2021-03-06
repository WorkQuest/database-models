import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class DaoPlatformStatistic extends Model {
  // Total votes and total value region
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) votes: number;
  @Column({ type: DataType.DECIMAL, defaultValue: '0' }) delegatedValue: string;

  // Votes for or against region
  @Column({ type: DataType.FLOAT, defaultValue: 0 }) votesFor: number;
  @Column({ type: DataType.FLOAT, defaultValue: 0 }) votesAgain: number;

  @Column({ type: DataType.DATEONLY, defaultValue: Date.now(), primaryKey: true }) date: Date;
}
