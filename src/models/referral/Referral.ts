import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import { User } from '../user/User';



@Table({
  scopes: {
    referral: {
      attributes: ["userId", "referralId"]
    }
  }
})
export class Referral extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;
  @Column({type: DataType.INTEGER, allowNull: false}) amountReward: number;
  @Column({type: DataType.STRING, defaultValue: () => getUUID()}) referralId: string;

  @BelongsTo(() => User, { constraints: false }) referrerId: User;
}

