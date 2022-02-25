import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../../types";

@Table
export class QuestJobStartedEvent extends Model {
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
}
