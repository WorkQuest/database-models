import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class WqtWbnbSwapEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) totalUSD: string;
  @Column(DataType.STRING) bnbAmountIn: string;
  @Column(DataType.STRING) bnbAmountOut: string;
  @Column(DataType.STRING) wqtAmountIn: string;
  @Column(DataType.STRING) account: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) wqtAmountOut: string;
  @Column(DataType.STRING) transactionHash: string;
}

