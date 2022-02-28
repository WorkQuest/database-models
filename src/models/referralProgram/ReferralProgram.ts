import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from '../user/User';

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

  @Column({type: DataType.INTEGER, defaultValue: null}) amountReward: number;
  @Column({type: DataType.STRING, defaultValue: () => getUUID()}) referralId: string;

  @BelongsTo(() => User, {constraints: false}) referrer: User;
}

