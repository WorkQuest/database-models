import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../../types";

export enum QuestJobFinishedEventStatus {
  QuestStatusDoesNotMatch = -2,
  QuestEntityNotFound = -1,
  Successfully = 0,
}

@Table
export class QuestJobFinishedEvent extends Model {
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
  @Column({type: DataType.INTEGER, allowNull: false}) status: QuestJobFinishedEventStatus;
}
