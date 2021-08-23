import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../utils';
import { Quest } from './Quest';
import {User} from "./User";

@Table
export class Filter extends Model {
    @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

    @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) userId: string;
    @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false}) questId: string;
    @Column({type: DataType.STRING, allowNull: false}) Category: string;
    @Column({type: DataType.STRING, allowNull: false}) Skills: string;

    @BelongsTo(() => User) user: User;
    @BelongsTo(() => Quest) quest: Quest;
}
