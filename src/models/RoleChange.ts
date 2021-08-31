import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../utils";
import {User, UserRole} from "./User";

export enum ChangeRoleStatus {
    Canceled = -1,
    Pending = 0,
    Completed = 1
}

@Table
export class RoleChange extends Model {
    @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

    @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

    @Column({ type: DataType.INTEGER, defaultValue: ChangeRoleStatus.Pending }) status: ChangeRoleStatus;

    @Column(DataType.STRING) changedFrom: UserRole;
    @Column(DataType.STRING) changedTo: UserRole;
    @Column(DataType.DATE) changedAt: Date;

    @BelongsTo(() => User) user: User;
}
