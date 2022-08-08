import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Wallet } from "../wallet/Wallet";

@Table
export class ProposalDelegateVotesChangedEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;

  @Column(DataType.STRING) delegator: string;
  @Column(DataType.STRING) delegatee: string;

  @Column(DataType.DECIMAL) previousBalance: string;
  @Column(DataType.DECIMAL) newBalance: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;

  @BelongsTo(() => Wallet, {
    foreignKey: 'delegator',
    targetKey: 'address',
    constraints: false
  })
  delegatorWallet: Wallet;

  @BelongsTo(() => Wallet, {
    foreignKey: 'delegatee',
    targetKey: 'address',
    constraints: false
  })
  delegateeWallet: Wallet;
}