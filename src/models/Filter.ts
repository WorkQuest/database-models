import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from 'sequelize-typescript';
import {getUUID} from '../utils';
import {Quest} from './Quest';
import {User} from "./User";


@Scopes(() => ({
    questFilter: {
        attributes: ["id", "questId", "category", "skills"]
    },
    userFilter: {
        attributes: ["id", "userId", "category", "skills"]
    }
}))
@Table
export class Filter extends Model {
    @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

    @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: true}) userId: string;
    @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: true}) questId: string;
    @Column({type: DataType.STRING, allowNull: false}) category: string;
    @Column({type: DataType.STRING, allowNull: false}) skills: string;

    @BelongsTo(() => User) user: User;
    @BelongsTo(() => Quest) quest: Quest;
}