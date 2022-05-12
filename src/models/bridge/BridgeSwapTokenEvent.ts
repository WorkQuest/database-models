import { Model, Column, DataType, Table } from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum SwapEvents {
  swapRedeemed = "SwapRedeemed",
  swapInitialized = "SwapInitialized",
}

@Table
export class BridgeSwapTokenEvent extends Model {
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) network: BlockchainNetworks;
  @Column(DataType.STRING) event: SwapEvents;
  @Column(DataType.STRING) messageHash: string;
  @Column(DataType.INTEGER) nonce: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) initiator: string;
  @Column(DataType.STRING) recipient: string;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.INTEGER) chainTo: number;
  @Column(DataType.INTEGER) chainFrom: number;
  @Column(DataType.STRING) symbol: string;
}
