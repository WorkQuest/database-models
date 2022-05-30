import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { Admin } from '../admin/Admin';
import { User } from '../user/User';
import { ReportMedia } from "./ReportMedia";
import { Media } from "../Media";
import { Quest } from "../quest/Quest";
import { DiscussionComment } from "../discussion/DiscussionComment";

export enum ReportStatus {
  Rejected = -1,
  Created = 0,
  Decided = 1
}

export enum ReportEntityType {
  User = 'User',
  Quest = 'Quest',
  Comment = 'Comment'
}

@Table
export class Report extends Model {
  @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.STRING }) resolvedByAdminId: string;

  @Column({ type: DataType.STRING, allowNull: false }) title: string;
  @Column({ type: DataType.TEXT, allowNull: false }) description: string;
  @Column({ type: DataType.SMALLINT, defaultValue: ReportStatus.Created }) status: ReportStatus;

  @Column({ type: DataType.STRING, allowNull: false }) entityType: ReportEntityType;
  @Column({ type: DataType.STRING, allowNull: false }) entityId: string;

  @Column({ type: DataType.DATE }) resolvedAt: Date;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;

  @BelongsTo(() => User, {
    foreignKey: 'entityId',
    targetKey: 'id'
  }) entityUser: User;
  @BelongsTo(() => Quest, {
    foreignKey: 'entityId',
    targetKey: 'id'
  }) entityQuest: Quest;
  @BelongsTo(() => DiscussionComment, {
    foreignKey: 'entityId',
    targetKey: 'id'
  }) entityComment: DiscussionComment;

  @BelongsToMany(() => Media, () => ReportMedia) medias: Media[];
}
