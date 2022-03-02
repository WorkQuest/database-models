import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from '../user/User';
import {ReferralProgramAffiliate} from "./ReferralProgramAffiliate";

@Table({
  scopes: {
    referral: {
      attributes: ["userId", "referralId"]
    }
  }
})
export class ReferralProgram extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) referrerUserId: string;

  @Column({type: DataType.DECIMAL, defaultValue: null}) paidReward: string;
  @Column({type: DataType.DECIMAL, defaultValue: null}) claimReward: string;

  @Column({type: DataType.STRING, defaultValue: () => getUUID()}) referralId: string;

  @BelongsTo(() => User, {constraints: false}) referrer: User;

  @HasMany(() => ReferralProgramAffiliate) affiliates: ReferralProgramAffiliate[]
}

