import { Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";

@Table
export class SavingsRefundedEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) user: string;
  @Column(DataType.STRING) amount: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) event: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}