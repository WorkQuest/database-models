import { User } from './User';
import { getUUID } from '../../utils';
import { RatingStatus, RatingStatuses } from "../types";
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class WorkerProfileVisibilitySetting extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) userId: string;

  @Column({ type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusCanInviteMeOnQuest: number;
  @Column({ type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusInMySearch: number;

  @Column({ type: DataType.VIRTUAL,
    get() {
      const ratingStatusCanInviteMeOnQuest = this.getDataValue('ratingStatusCanInviteMeOnQuest');

      return RatingStatuses.filter((status) =>
        ((status & ratingStatusCanInviteMeOnQuest) != 0)
      );
    },
    set() {
      throw Error("Can't set this field");
    },
  }) arrayRatingStatusCanInviteMeOnQuest: number[];

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
