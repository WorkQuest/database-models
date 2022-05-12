import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../../types";

export enum QuestJobStartedEventStatus {
  QuestStatusDoesNotMatch = -2,
  QuestEntityNotFound = -1,
  Successfully = 0,
}

@Table
export class QuestJobStartedEvent extends Model {
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) blockNumber: number;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
  @Column({type: DataType.INTEGER, allowNull: false}) status: QuestJobStartedEventStatus;
}
