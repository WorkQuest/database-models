import { Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";

@Table
export class SavingProductReceivedEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
  @Column(DataType.STRING) user: string;
  @Column(DataType.STRING) amount: string;
  @Column(DataType.INTEGER) timestamp: string;
  @Column(DataType.STRING) event: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
