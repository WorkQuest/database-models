import {BlockchainNetworks} from "../../types";
import {Column, DataType, Model, Table} from "sequelize-typescript";

export enum QuestAssignedEventStatus {
  QuestStatusDoesNotMatch = -2,
  WorkerOrQuestEntityNotFound = -1,
  Successfully = 0,
}

@Table
export class QuestAssignedEvent extends Model {
  @Column(DataType.STRING) workerAddress: string;
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.BIGINT) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
  @Column({type: DataType.INTEGER, allowNull: false}) status: QuestAssignedEventStatus;
}
