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
import {AffiliateStatus} from "../types";

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: User.scope('shortWithWallet'),
      as: 'user'
    }]
  },
  shortAffiliate: {
    attributes: {
      include: ["affiliateId", "userReferralId", "status"],
      exclude: ["createdAt", "updatedAt", "deletedAt"]
    }
  }
}))
@Table({paranoid: true})
export class ReferrerAffiliate extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) affiliateId: string;

  @Column({type: DataType.STRING, allowNull: false}) userReferralId: string;
  @Column({type: DataType.STRING, defaultValue: AffiliateStatus.Registered}) status: AffiliateStatus;

  @BelongsTo(() => User) user: User;
}
