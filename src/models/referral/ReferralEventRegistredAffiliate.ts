import {Model, Column, DataType, Table} from 'sequelize-typescript';

@Table /** Contract event */
export class ReferralEventRegistredAffiliate extends Model {
  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.STRING) referral: string;
  @Column(DataType.STRING) affiliat: string;
  @Column(DataType.DECIMAL) timestamp: string;
}
