import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
  modelName: 'DailyLiquidityWqtWeth',
  tableName: 'DailyLiquidityWqtWeth',
  freezeTableName: true,
})
export class DailyLiquidityWqtWeth extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER }) daySinceEpochBeginning: string;

  @Column(DataType.INTEGER) date: number;
  @Column(DataType.STRING) blockNumber: string;
  @Column(DataType.STRING) ethPool: string;
  @Column(DataType.STRING) wqtPool: string;
  @Column(DataType.STRING) usdPriceETH: string;
  @Column(DataType.STRING) usdPriceWQT: string;
  @Column(DataType.STRING) reserveUSD: string;
}

