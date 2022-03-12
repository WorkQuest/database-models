import {Model, Column, DataType, Table, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";
import {getUUID} from "../../utils";
import {Proposal} from "./Proposal";

@Table /** Contract event */
export class ProposalExecutedEvent extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Proposal)
  @Column({type: DataType.STRING, allowNull: false}) proposalId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  /** Event on contract (see contract) */
  @Column(DataType.DECIMAL) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.INTEGER) contractProposalId: number;
  @Column(DataType.BOOLEAN) succeeded: boolean;
  @Column(DataType.BOOLEAN) defeated: boolean;

  @BelongsTo(() => Proposal) proposal: Proposal;
}
