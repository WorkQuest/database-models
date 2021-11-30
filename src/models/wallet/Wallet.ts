import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {User} from "../user/User";
import {addressConverter} from "../../utils/wallet";

@Table
export class Wallet extends Model {
    @Column({ type: DataType.STRING, defaultValue: () => getUUID(), primaryKey: true })
    id!: string;

    @ForeignKey(() => User)
    @Column(DataType.STRING) userId!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    address!: string;

    @Column({
        type: DataType.VIRTUAL,
        get() {
            const hexAddress = this.getDataValue('address');

            return addressConverter(hexAddress).toBech32();
        },
        set() {
            throw Error('Can`t set this field');
        }
    }) bech32Address: string;

    @Column({ type: DataType.STRING, allowNull: false })
    publicKey!: string;

    @BelongsTo(() => User) user: User;
}
