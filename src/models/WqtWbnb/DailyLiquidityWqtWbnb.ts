import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
  modelName: 'DailyLiquidityWqtWbnb',
})
export class DailyLiquidityWqtWbnb extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER }) daySinceEpochBeginning: string;

  @Column(DataType.INTEGER) date: number;
  @Column(DataType.STRING) blockNumber: string;
  @Column(DataType.STRING) bnbPool: string;
  @Column(DataType.STRING) wqtPool: string;
  @Column(DataType.STRING) usdPriceBNB: string;
  @Column(DataType.STRING) usdPriceWQT: string;
  @Column(DataType.STRING) reserveUSD: string;
}
