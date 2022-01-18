import {Column, DataType, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";

@Table
export class SwapParser extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @Column(DataType.STRING) blockNumber: string;
  @Column(DataType.STRING) totalUSD: string; /** In decimal */
  @Column(DataType.STRING) bnbAmountIn: string; /** In decimal */
  @Column(DataType.STRING) bnbAmountOut: string; /** In decimal */
  @Column(DataType.STRING) wqtAmountIn: string; /** In decimal */
  @Column(DataType.STRING) wqtAmountOut: string; /** In decimal */
  @Column(DataType.STRING) account: string;
  @Column(DataType.STRING) timestamp: string;
}

