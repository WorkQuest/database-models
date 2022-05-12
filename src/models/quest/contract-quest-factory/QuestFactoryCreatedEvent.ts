import {BlockchainNetworks} from "../../types";
import {Column, DataType, Model, Table} from "sequelize-typescript";

export enum QuestFactoryStatus {
  QuestEntityNotFound = -1,         /** The relationship of the quest entity with the quest on the contract -> Quest.nonce = QuestFactoryCreatedEvent.nonce */
  Successfully = 0,                 /** Quest essence found by nonce (Quest.nonce = QuestFactoryCreatedEvent.nonce)                                         */
}

@Table /** Contract event */
export class QuestFactoryCreatedEvent extends Model {
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) jobHash: string;
  @Column(DataType.STRING) employerAddress: string;
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
  @Column({type: DataType.INTEGER, allowNull: false}) status: QuestFactoryStatus;
}
