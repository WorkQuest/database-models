import { Model, Column, DataType, Table } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";

export enum swapUsdtStatus {
  SwapCreated = 'SwapCreated',
  SwapActive = 'SwapActive',
  SwapProcessed = 'SwapProcessed',
  SwapCompleted = 'SwapCompleted',
  SwapError = "SwapError"
}

@Table
export class SwapUsdtSendWqt extends Model {
  @Column(DataType.STRING) txHash: string;
  @Column(DataType.STRING) txHashSwapInitialized: string;
  @Column(DataType.STRING) userId: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.INTEGER) ratio: number;
  @Column(DataType.STRING) network: BlockchainNetworks;
  @Column(DataType.STRING) status: swapUsdtStatus;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.DECIMAL) gasUsed: string;
}
