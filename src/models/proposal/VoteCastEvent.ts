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
export class VoteCastEvent extends Model {
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) voter: string;
  @Column(DataType.INTEGER) proposalId: number;
  @Column(DataType.BOOLEAN) support: boolean;
  @Column(DataType.DECIMAL) votes: string;
  @Column(DataType.DECIMAL) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
