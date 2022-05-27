import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { Admin } from '../admin/Admin';
import { User } from '../user/User';

export enum SupportStatus {
  Rejected = -1,
  Created = 0,
  Waiting = 1,
  Decided = 2
}

export enum AdminSupportResolved {
  Expected = 'Expected',
  AnsweredByMail = 'AnsweredByMail',
  RepliedToPrivateMessages = 'RepliedToPrivateMessages',
  Decided = 'Decided'
}

@Table
export class Support extends Model {
  @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => getUUID() }) id: string;

  @Column({ type: DataType.INTEGER, autoIncrement: true, allowNull: false }) supportTicket: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) supportAuthor: string;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.STRING }) resolvedByAdminId: string;

  @Column({ type: DataType.STRING }) email: string;
  @Column({ type: DataType.STRING, allowNull: false }) title: string;
  @Column({ type: DataType.TEXT, allowNull: false }) description: string;
  @Column({ type: DataType.SMALLINT, allowNull: false }) status: SupportStatus;
  @Column({ type: DataType.STRING, allowNull: false }) resolvedStatus: AdminSupportResolved;

  @Column({ type: DataType.DATE }) completionAt: Date;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;
}
