import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../types";

@Table
export class WqtWbnbSwapEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) amountUSD: string;
  @Column(DataType.STRING) amount0In: string;
  @Column(DataType.STRING) amount0Out: string;
  @Column(DataType.STRING) amount1In: string;
  @Column(DataType.STRING) to: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) amount1Out: string;
  @Column(DataType.STRING) transactionHash: string;
}
