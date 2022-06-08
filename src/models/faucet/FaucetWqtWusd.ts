import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum FaucetAmount {
  WQT = '100',
  WUSD = '1000',
}

@Table
export class FaucetWusdWqt extends Model {
  @Column({ type: DataType.STRING, allowNull: false }) userId: string;
  @Column({ type: DataType.STRING, allowNull: false }) address: string;
  @Column({ type: DataType.DECIMAL, allowNull: false }) amount: string;
  @Column({ type: DataType.STRING, allowNull: false }) symbol: string;
  @Column({ type: DataType.INTEGER, allowNull: false }) blockNumber: number;
  @Column({ type: DataType.STRING, allowNull: false }) transactionHash: string;
  @Column({ type: DataType.STRING, allowNull: false }) network: BlockchainNetworks;
}
