import {Model, Column, DataType, Table, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";
import {Proposal} from "./Proposal";
import {getUUID} from "../../utils";

@Table /** Contract event */
export class ProposalVoteCastEvent extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Proposal)
  @Column(DataType.STRING) proposalId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) voter: string;
  @Column(DataType.INTEGER) contractProposalId: number;
  @Column(DataType.BOOLEAN) support: boolean;
  @Column(DataType.DECIMAL) votes: string;
  @Column(DataType.DECIMAL) timestamp: string;

  @BelongsTo(() => Proposal) proposal: Proposal;
}
