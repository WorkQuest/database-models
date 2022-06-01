import { User } from '../user/User';
import { getUUID } from '../../utils';
import { Admin } from '../admin/Admin';
import { Table, Model, Column, DataType, ForeignKey, BelongsTo, Scopes } from 'sequelize-typescript';

export enum TicketStatus {
  Rejected = -1,
  Pending = 0,
  Decided = 1,
}

export enum TicketDecision {
  Pending = 'Pending',
  AnsweredByMail = 'AnsweredByMail',
  RepliedToPrivateMessages = 'RepliedToPrivateMessages',
  Decided = 'Decided',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt"]
    },
    short: {
      attributes: [
        "title",
        "number",
        "status",
        "authorUserId",
      ],
      include: [{
        model: Admin.scope('short'),
        as: "resolvedByAdmin",
      }, {
        model: User.scope('short'),
        as: "authorUser",
      }],
    }
  }
}))
@Table
export class SupportTicketForUser extends Model {
  @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => getUUID() }) id: string;

  @Column({ type: DataType.INTEGER, autoIncrement: true, allowNull: false }) number: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorUserId: string;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.STRING }) resolvedByAdminId: string;

  @Column({ type: DataType.STRING }) replyToMail: string;
  @Column({ type: DataType.STRING, allowNull: false }) title: string;
  @Column({ type: DataType.TEXT, allowNull: false }) description: string;
  @Column({ type: DataType.SMALLINT, allowNull: false }) status: TicketStatus;
  @Column({ type: DataType.STRING, allowNull: false }) decision: TicketDecision;

  @Column({ type: DataType.DATE }) completionAt: Date;

  @BelongsTo(() => User) authorUser: User;
  @BelongsTo(() => Admin) resolvedByAdmin: Admin;
}
