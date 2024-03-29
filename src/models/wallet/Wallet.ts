import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {User} from "../user/User";
import converter from 'bech32-converting';

@Table
export class Wallet extends Model {
    @Column({ type: DataType.STRING, defaultValue: () => getUUID(), primaryKey: true })
    id!: string;

    @ForeignKey(() => User)
    @Column(DataType.STRING) userId!: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    address!: string;

    @Column({
        type: DataType.VIRTUAL,
        get() {
            const hexAddress = this.getDataValue('address');

            return converter('wq').toBech32(hexAddress);
        },
        set() {
            throw Error('Can`t set this field');
        }
    }) bech32Address: string;

    @Column({ type: DataType.STRING, allowNull: false })
    publicKey!: string;

    @BelongsTo(() => User) user: User;
}
