import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Scopes,
  Table
} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from '../user/User';
import {ReferralProgram} from "./ReferralProgram";

export enum AffiliateStatus {
  Created = "created",
  Registered = "registered",
  Claimed = "claimed",
  Paid = "paid"
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
      include: ["affiliateUserId", "referralId", "status"],
      exclude: ["createdAt", "updatedAt", "deletedAt"]
    }
  }
}))
@Table
export class ReferrerAffiliateUser extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) affiliateUserId: string;

  @ForeignKey(() => ReferralProgram)
  @Column({type: DataType.STRING, allowNull: false}) referralId: string;
  @Column({type: DataType.STRING, defaultValue: AffiliateStatus.Registered}) status: AffiliateStatus;

  @BelongsTo(() => User) user: User;
}
