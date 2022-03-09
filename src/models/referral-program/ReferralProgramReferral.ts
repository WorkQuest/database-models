import {User} from '../user/User';
import {getUUID} from '../../utils';
import {ReferralProgramAffiliate} from "./ReferralProgramAffiliate";
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
  shortReferral: {
    attributes: {
      include: ["affiliateUserId", "referralProgramId", "referralStatus", "rewardStatus"],
      exclude: ["createdAt", "updatedAt"]
    }
  },
  shortReferralProgramReferrals: {
    include: [{
      model: User.scope('short'),
      as: 'user'
    }],
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    }
  }
}))
@Table
export class ReferralProgramReferral extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) referralUserId: string;

  @ForeignKey(() => ReferralProgramAffiliate)
  @Column({type: DataType.STRING, allowNull: false}) referralProgramId: string;

  @Column({type: DataType.STRING, defaultValue: ReferralStatus.Registered}) referralStatus: ReferralStatus;
  @Column({type: DataType.STRING, defaultValue: null}) rewardStatus: RewardStatus;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => ReferralProgramAffiliate) referralProgram: ReferralProgramAffiliate;
}
