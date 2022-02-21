import {
  BelongsTo,
  BelongsToMany,
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
import {Referral} from "./Referral";


@Scopes(() => ({
  defaultScope: {
    include: [{
      model: User.scope('shortWithWallet'),
      as: 'user'
    }]
  },

}))
@Table({paranoid: true})
export class ReferrerAffiliate extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) affiliateId: string;
  @Column({type: DataType.STRING, allowNull: false}) userReferral: string;
  @Column({type: DataType.STRING, defaultValue: null}) affiliateStatus: AffiliateStatus;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Referral) referralId: Referral;
}
