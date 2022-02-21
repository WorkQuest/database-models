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
import {Media} from "../Media";
import { PortfolioMedia } from '../user/PortfolioMedia';


@Scopes(() => ({
  defaultScope: {
    include: [{
      model: Media.scope('urlOnly'),
      as: 'medias',
      through: {
        attributes: []
      }
    },{
      model: User.scope('shortWithWallet'),
      as:'user'
    }]
  },

}))
@Table({paranoid: true})
export class ReferrerAffiliate extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) affiliateId: string;

  @Column({type: DataType.STRING, allowNull: false}) userReferral: string;
  @Column({type: DataType.STRING, defaultValue: null}) workplace: AffiliateStatus;

  @BelongsTo(() => User) user: User;
  @BelongsToMany(() => Media, () => PortfolioMedia) medias: Media[];
}
