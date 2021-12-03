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
import { getUUID } from '../../utils';
import { User } from './User';
import { PortfolioMedia } from './PortfolioMedia';
import { Media } from '../Media';

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: Media.scope('urlOnly'),
      as: 'medias',
      through: {
        attributes: []
      }
    },{
      model: User.scope('short'),
      as:'user'
    }]
  }
}))
@Table({paranoid: true})
export class Portfolio extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.STRING, allowNull: false }) title: string;
  @Column({type: DataType.TEXT }) description: string;

  @BelongsTo(() => User) user: User;
  @BelongsToMany(() => Media, () => PortfolioMedia) medias: Media[];
}
