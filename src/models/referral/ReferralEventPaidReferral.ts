import {Model, Column, DataType, Table} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

@Table /** Contract event */
export class ReferralEventPaidReferral extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) referral: string;
  @Column(DataType.STRING) affiliat: string;
  @Column(DataType.STRING) amount: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) event: string;
  @Column(DataType.STRING) network: BlockchainNetworks;
}
