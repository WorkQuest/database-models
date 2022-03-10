import {Model, Column, DataType, Table, BelongsTo, ForeignKey} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";
import {ReferralProgramAffiliate} from "./ReferralProgramAffiliate";

@Table /** Contract event */
export class ReferralEventRewardClaimed extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) transactionHash: string;
  @ForeignKey(() => ReferralProgramAffiliate)
  @Column(DataType.STRING) affiliate: string;
  @Column(DataType.STRING) amount: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;

  @BelongsTo(() => ReferralProgramAffiliate) referralProgramAffiliateEvent: ReferralProgramAffiliate;
}
