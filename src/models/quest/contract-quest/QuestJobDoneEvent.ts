import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../../types";

@Table
export class QuestJobDoneEvent extends Model {
  @Column(DataType.STRING) contractAddress: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.BIGINT) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
}
