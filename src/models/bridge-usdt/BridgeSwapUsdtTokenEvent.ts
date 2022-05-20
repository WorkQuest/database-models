import {Model, Column, DataType, Table, BelongsTo} from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import {FirstWqtTransmissionData} from "../transaction-features/first-wqt/FirstWqtTransmissionData";

export enum SwapUsdtEvents {
  SwapInitialized = "SwapInitialized",
}

@Table
export class BridgeSwapUsdtTokenEvent extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, unique: true }) transactionHash: string;
  @Column(DataType.STRING) userId: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) network: BlockchainNetworks;
  @Column(DataType.STRING) event: SwapUsdtEvents;
  @Column(DataType.INTEGER) nonce: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) recipient: string;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.INTEGER) chainTo: number;
  @Column(DataType.INTEGER) chainFrom: number;
  @Column(DataType.STRING) symbol: string;

  @BelongsTo(() => FirstWqtTransmissionData) firstWqtTransmissionData: FirstWqtTransmissionData;
}
