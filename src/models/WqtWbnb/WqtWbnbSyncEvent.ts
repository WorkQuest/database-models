import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../types";

@Table
export class WqtWbnbSyncEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) reserveBNB: string;
  @Column(DataType.STRING) reserveWQT: string;
  @Column(DataType.STRING) priceBNB: string;
  @Column(DataType.STRING) priceWQT: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
