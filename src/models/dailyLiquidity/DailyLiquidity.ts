import {Column, DataType, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";

@Table
export class DailyLiquidity extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @Column(DataType.DECIMAL) timestamp: number;
  @Column(DataType.STRING) blockNumber: string;
  @Column(DataType.DECIMAL) bnbPool: string;
  @Column(DataType.DECIMAL) wqtPool: string;
  @Column(DataType.DECIMAL) usdPriceBNB: string;
  @Column(DataType.DECIMAL) usdPriceWQT: string;
  @Column(DataType.DECIMAL) liquidityPoolUSD: string;
}

