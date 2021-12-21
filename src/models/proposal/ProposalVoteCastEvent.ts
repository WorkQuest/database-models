import {Model, Column, DataType, Table} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

@Table /** Contract event */
export class ProposalVoteCastEvent extends Model {
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) voter: string;
  @Column(DataType.INTEGER) proposalId: number;
  @Column(DataType.BOOLEAN) support: boolean;
  @Column(DataType.DECIMAL) votes: string;
  @Column(DataType.DECIMAL) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
