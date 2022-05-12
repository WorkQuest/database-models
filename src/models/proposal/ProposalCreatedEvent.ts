import {Model, Column, DataType, Table, Scopes, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";
import {Proposal} from "./Proposal";
import {getUUID} from "../../utils";

@Table /** Contract event */
export class ProposalCreatedEvent extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Proposal)
  @Column(DataType.STRING) proposalId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
  @Column(DataType.INTEGER) contractProposalId: number;
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) proposer: string;
  @Column(DataType.TEXT) description: string;
  @Column(DataType.INTEGER) votingPeriod: number;
  @Column(DataType.INTEGER) minimumQuorum: number;
  @Column(DataType.DECIMAL) timestamp: string;

  @BelongsTo(() => Proposal) proposal: Proposal;
}
