import {Model, Column, DataType, Table, Scopes} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum VoteCastEventType {
  VoteCast = 'VoteCast'
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["id", "network", "event"]
    }
  }
}))
@Table
export class VoteCastEvents extends Model {
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) voter: string;
  @Column(DataType.INTEGER) proposalId: number;
  @Column(DataType.BOOLEAN) support: boolean;
  @Column(DataType.STRING) votes: string;
  @Column(DataType.DECIMAL) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
  @Column(DataType.STRING) event: VoteCastEventType;
}
