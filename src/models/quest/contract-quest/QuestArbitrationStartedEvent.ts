import { Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";

export enum QuestArbitrationStartedStatus {
  DisputeStatusDoesNotMatch = -3,
  QuestNotFound = -2,
  DisputeNotFound = -1,
  Successfully = 0,
}

@Table
export class QuestArbitrationStartedEvent extends Model {
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;

  @Column({ type: DataType.STRING, allowNull: false }) network: BlockchainNetworks;
  @Column({ type: DataType.SMALLINT, allowNull: false }) status: QuestArbitrationStartedStatus;
}
