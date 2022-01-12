import {Column, DataType, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";

@Table
export class DailyLiquidity extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @Column(DataType.DECIMAL) date: string;
  @Column(DataType.STRING) blockNumber: string;
  @Column(DataType.STRING) bnbPool: string;
  @Column(DataType.STRING) wqtPool: string;
  @Column(DataType.STRING) usdPriceBNB: string;
  @Column(DataType.STRING) usdPriceWQT: string;
  @Column(DataType.STRING) reserveUSD: string;
}

