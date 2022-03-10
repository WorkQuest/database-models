import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from '../user/User';
import {ReferralProgramReferral} from "./ReferralProgramReferral";
import {ReferralEventRewardClaimed} from "./ReferralEventRewardClaimed";

@Table({
  scopes: {
    referral: {
      attributes: ["userId", "referralId"]
    }
  }
})
export class ReferralProgramAffiliate extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) affiliateUserId: string;

  @Column({type: DataType.DECIMAL, defaultValue: null}) paidReward: string;

  @Column({type: DataType.STRING, defaultValue: () => getUUID()}) referralCodeId: string;

  @BelongsTo(() => User, {constraints: false}) affiliateUser: User;

  @HasMany(() => ReferralProgramReferral) affiliate: ReferralProgramReferral[]
}

