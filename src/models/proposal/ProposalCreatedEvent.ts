import {Model, Column, DataType, Table, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";
import {Proposal} from "./Proposal";
import {getUUID} from "../../utils";

@Table /** Contract event */
export class ProposalCreatedEvent extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Proposal)
  @Column({type: DataType.STRING, allowNull: false}) proposalId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  /** Event on contract (see contract) */
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.INTEGER) contractProposalId: number;
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) proposer: string;
  @Column(DataType.TEXT) description: string;
  @Column(DataType.INTEGER) votingPeriod: number;
  @Column(DataType.INTEGER) minimumQuorum: number;
  @Column(DataType.DECIMAL) timestamp: string;

  @BelongsTo(() => Proposal) proposal: Proposal;
}
