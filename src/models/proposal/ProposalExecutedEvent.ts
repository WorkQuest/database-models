import {Model, Column, DataType, Table} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

@Table /** Contract event */
export class ProposalExecutedEvent extends Model {
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.INTEGER) proposalId: number;
  @Column(DataType.BOOLEAN) succeeded: boolean;
  @Column(DataType.BOOLEAN) defeated: boolean;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
