import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../types";

@Table
export class WqtWbnbMintEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) amount0: string;
  @Column(DataType.STRING) amount1: string;
  @Column(DataType.STRING) sender: string;
  @Column(DataType.STRING) timestamp: string;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
}
