import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { Quest } from './Quest';
import { getUUID } from '../../utils';

@Table
export class ReviewAdmin extends Model {
    @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
    @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false}) questId: string;
    @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) fromUserId: string;
    @ForeignKey(() => Admin) @Column({type: DataType.STRING, allowNull: false}) toAdminId: string;

    @Column({type: DataType.TEXT, defaultValue: null }) message: string;
    @Column({type: DataType.INTEGER, allowNull: false }) mark: number;

    @BelongsTo(() => User, 'fromUserId') fromUser: User;
    @BelongsTo(() => Admin, 'toAdminId') toUser: Admin;
    @BelongsTo(() => Quest, 'questId') quest: Quest;

    avgMark: number; /** Used for calculations */
}
