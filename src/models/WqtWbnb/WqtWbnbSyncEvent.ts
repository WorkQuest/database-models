import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../types";

@Table
export class WqtWbnbSyncEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) reserve0: string;
  @Column(DataType.STRING) reserve1: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}

