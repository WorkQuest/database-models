import { User } from '../user/User';
import { getUUID } from '../../utils';
import { Admin } from '../admin/Admin';
import { Table, Model, Column, DataType, ForeignKey, BelongsTo, Scopes } from 'sequelize-typescript';

export enum SupportStatus {
  Rejected = -1,
  Created,
  Waiting,
  Decided
}

export enum AdminSupportResolved {
  Waiting = 'Waiting',
  AnsweredByMail = 'AnsweredByMail',
  RepliedToPrivateMessages = 'RepliedToPrivateMessages',
  Decided = 'Decided'
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    short: {
      attributes: ["supportTicket", "authorId", "email", "title", "description", "status", "decision"]
    }
  }
}))
@Table
export class Support extends Model {
  @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => getUUID() }) id: string;

  @Column({ type: DataType.INTEGER, autoIncrement: true, allowNull: false }) supportTicket: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.STRING }) resolvedByAdminId: string;

  @Column({ type: DataType.STRING }) email: string;
  @Column({ type: DataType.STRING, allowNull: false }) title: string;
  @Column({ type: DataType.TEXT, allowNull: false }) description: string;
  @Column({ type: DataType.SMALLINT, allowNull: false }) status: SupportStatus;
  @Column({ type: DataType.STRING, allowNull: false }) decision: AdminSupportResolved;

  @Column({ type: DataType.DATE }) completionAt: Date;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;
}
