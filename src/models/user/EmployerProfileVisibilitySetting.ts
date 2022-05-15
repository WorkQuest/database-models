import { User } from './User';
import { getUUID } from '../../utils';
import { RatingStatus, RatingStatuses } from "../types";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table, } from 'sequelize-typescript';

@Table
export class EmployerProfileVisibilitySetting extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({ type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusCanRespondToQuest: number;
  @Column({ type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusInMySearch: number;

  @Column({ type: DataType.VIRTUAL,
    get() {
      const ratingStatusCanRespondToQuest = this.getDataValue('ratingStatusCanRespondToQuest');

      return RatingStatuses.filter((status) =>
        ((status & ratingStatusCanRespondToQuest) != 0)
      );
    },
    set() {
      throw Error("Can't set this field");
    },
  }) arrayRatingStatusCanRespondToQuest: number[];

  @Column({ type: DataType.VIRTUAL,
    get() {
      const ratingStatusInMySearch = this.getDataValue('ratingStatusInMySearch');

      return RatingStatuses.filter((status) =>
          ((status & ratingStatusInMySearch) != 0)
      );
    },
    set() {
      throw Error("Can't set this field");
    },
  }) arrayRatingStatusInMySearch: number[];

  @BelongsTo(() => User) user: User;
}
