import {Column, DataType, Model, Table} from "sequelize-typescript";
import {BlockchainNetworks} from "../types";

@Table /** Contract event */
export class QuestCreatedEvent extends Model {
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) jobHash: string;
  @Column(DataType.STRING) employerAddress: string;
  @Column(DataType.STRING) contractAddress: string
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
