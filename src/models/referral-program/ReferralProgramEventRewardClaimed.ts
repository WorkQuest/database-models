import {Model, Column, DataType, Table} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

@Table /** Contract event */
export class ReferralProgramEventRewardClaimed extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
  @Column(DataType.STRING) affiliate: string;
  @Column(DataType.STRING) amount: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
