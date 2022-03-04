import {User} from '../user/User';
import {getUUID} from '../../utils';
import {ReferralProgram} from "./ReferralProgram";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Scopes,
  Table
} from 'sequelize-typescript';

export enum ReferralStatus {
  Created = "created",
  Registered = "registered",
}

export enum RewardStatus {
  Paid = "paid",
  Claimed = "claimed",
}

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: User.scope('shortWithWallet'),
      as: 'user'
    }]
  },
  shortAffiliate: {
    attributes: {
      include: ["affiliateUserId", "referralProgramId", "referralStatus", "rewardStatus"],
      exclude: ["createdAt", "updatedAt"]
    }
  },
  shortReferralProgramAffiliates: {
    include: [{
      model: User.scope('short'),
      as: 'user'
    }],
    attributes: {
      include: ["affiliateUserId", "referralProgramId", "referralStatus", "rewardStatus"]
    }
  }
}))
@Table
export class ReferralProgramAffiliate extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) affiliateUserId: string;

  @ForeignKey(() => ReferralProgram)
  @Column({type: DataType.STRING, allowNull: false}) referralProgramId: string;

  @Column({type: DataType.STRING, defaultValue: ReferralStatus.Registered}) referralStatus: ReferralStatus;
  @Column({type: DataType.STRING, defaultValue: null}) rewardStatus: RewardStatus;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => ReferralProgram) referral: ReferralProgram;
}
