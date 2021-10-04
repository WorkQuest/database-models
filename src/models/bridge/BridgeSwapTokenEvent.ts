import { Model, Column, DataType, Table } from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum SwapEvents {
  swapRedeemed = "SwapRedeemed",
  swapInitialized = "SwapInitialized",
}

@Table
export class BridgeSwapTokenEvent extends Model {
  @Column({type: DataType.STRING, primaryKey: true, allowNull: false}) transactionHash: string;
  @Column({type: DataType.INTEGER.UNSIGNED, allowNull: false}) blockNumber: number;
  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
  @Column({type: DataType.STRING, allowNull: false}) event: SwapEvents;
  @Column({type: DataType.STRING, allowNull: false}) messageHash: string;
  @Column({type: DataType.INTEGER, allowNull: false}) nonce: number;
  @Column({type: DataType.STRING, allowNull: false}) timestamp: string;
  @Column({type: DataType.STRING, allowNull: false}) initiator: string;
  @Column({type: DataType.STRING, allowNull: false}) recipient: string;
  @Column({type: DataType.DECIMAL, allowNull: false}) amount: string;
  @Column({type: DataType.INTEGER, allowNull: false}) chainTo: number;
  @Column({type: DataType.INTEGER, allowNull: false}) chainFrom: number;
  @Column({type: DataType.STRING, allowNull: false}) symbol: string;
}
