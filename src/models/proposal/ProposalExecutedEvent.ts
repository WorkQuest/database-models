import {Model, Column, DataType, Table, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";
import {Proposal} from "./Proposal";
import {getUUID} from "../../utils";

@Table /** Contract event */
export class ProposalExecutedEvent extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Proposal)
  @Column(DataType.STRING) proposalId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  /** Event on contract (see contract) */
  @Column(DataType.DECIMAL) timestamp: string;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
  @Column(DataType.INTEGER) contractProposalId: number;
  @Column(DataType.BOOLEAN) succeeded: boolean;
  @Column(DataType.BOOLEAN) defeated: boolean;

  @BelongsTo(() => Proposal) proposal: Proposal;
}
