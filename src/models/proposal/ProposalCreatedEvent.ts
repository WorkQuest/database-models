import {Model, Column, DataType, Table, Scopes} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["id", "network", "event", "updatedAt", "createdAt", "deletedAt"]
    }
  }
}))
@Table
export class ProposalCreatedEvent extends Model {
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.INTEGER) proposalId: number;
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) proposer: string;
  @Column(DataType.TEXT) description: string;
  @Column(DataType.INTEGER) votingPeriod: number;
  @Column(DataType.INTEGER) minimumQuorum: number;
  @Column(DataType.DECIMAL) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
