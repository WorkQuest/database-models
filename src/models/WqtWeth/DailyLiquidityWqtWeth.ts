import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class DailyLiquidity extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER }) daySinceEpochBeginning: string;

  @Column(DataType.INTEGER) date: string;
  @Column(DataType.STRING) blockNumber: string;
  @Column(DataType.STRING) ethPool: string;
  @Column(DataType.STRING) wqtPool: string;
  @Column(DataType.STRING) usdPriceETH: string;
  @Column(DataType.STRING) usdPriceWQT: string;
  @Column(DataType.STRING) reserveUSD: string;
}

