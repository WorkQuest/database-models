import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Admin } from "../admin/Admin";
import converter from "bech32-converting";

@Table
export class AdminWallet extends Model {
  @Column({ type: DataType.STRING, primaryKey: true }) address: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) adminId: string;

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
  publicKey: string;

  @BelongsTo(() => Admin) admin: Admin;
}
