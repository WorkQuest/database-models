import { Model, Column, DataType, Table } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";

@Table
export class SwapUsdtSwapWqt extends Model {
  @Column(DataType.STRING) txHash: string;
  @Column(DataType.STRING) txHashSwapInitialized: string;
  @Column(DataType.STRING) userId: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.INTEGER) ratio: number;
  @Column(DataType.STRING) network: BlockchainNetworks;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.DECIMAL) gasUsed: string;
}
