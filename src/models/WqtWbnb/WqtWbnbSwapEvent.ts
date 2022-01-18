import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class WqtWbnbSwapEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) totalUSD: string;
  @Column(DataType.STRING) bnbAmountIn: string; /** In decimal */
  @Column(DataType.STRING) bnbAmountOut: string; /** In decimal */
  @Column(DataType.STRING) wqtAmountIn: string; /** In decimal */
  @Column(DataType.STRING) wqtAmountOut: string; /** In decimal */
  @Column(DataType.STRING) account: string;
  @Column(DataType.STRING) timestamp: string;
}

