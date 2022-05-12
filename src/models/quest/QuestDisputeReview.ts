import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { getUUID } from '../../utils';
import { QuestDispute } from "./QuestDispute";

@Table({
  defaultScope: {
    attributes: { exclude: ['updatedAt'] },
    include: [{
      model: User,
      as: 'fromUser',
    }, {
      model: Admin,
      as: 'toAdmin'
    }, {
      model: QuestDispute,
      as: 'dispute'
    }]
  }
})
export class QuestDisputeReview extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => QuestDispute)
  @Column({ type: DataType.STRING, allowNull: false }) disputeId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) fromUserId: string;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.STRING, allowNull: false }) toAdminId: string;

  @Column({ type: DataType.TEXT, defaultValue: null }) message: string;
  @Column({ type: DataType.INTEGER, allowNull: false }) mark: number;

  @BelongsTo(() => User, 'fromUserId') fromUser: User;
  @BelongsTo(() => Admin, 'toAdminId') toAdmin: Admin;
  @BelongsTo(() => QuestDispute, 'disputeId') dispute: QuestDispute;

  avgMark: number; /** Used for calculations */
}
