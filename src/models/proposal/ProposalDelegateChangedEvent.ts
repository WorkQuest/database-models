import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Wallet } from "../wallet/Wallet";

@Table
export class ProposalDelegateChangedEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;

  @Column(DataType.STRING) delegator: string;
  @Column(DataType.STRING) fromDelegate: string;
  @Column(DataType.STRING) toDelegate: string;

  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;

  @BelongsTo(() => Wallet, { foreignKey: 'delegator', targetKey: 'address' })
  delegatorWallet: Wallet;

  @BelongsTo(() => Wallet, { foreignKey: 'fromDelegate', targetKey: 'address' })
  fromDelegateWallet: Wallet;

  @BelongsTo(() => Wallet, { foreignKey: 'toDelegate', targetKey: 'address' })
  toDelegateWallet: Wallet;
}