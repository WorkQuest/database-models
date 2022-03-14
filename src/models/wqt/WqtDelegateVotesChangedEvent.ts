import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import { BlockchainNetworks } from "../types";

@Table
export class WqtDelegateVotesChangedEvent extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: true }) delegatorUserId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: true }) delegateeUserId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    set(value: string) {
      this.setDataValue('transactionHash', value.toLowerCase());
    }
  }) transactionHash: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    set(value: string) {
      this.setDataValue('delegatorAddress', value.toLowerCase());
    }
  }) delegatorAddress: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    set(value: string) {
      this.setDataValue('delegateeAddress', value.toLowerCase());
    }
  }) delegateeAddress: string;

  @Column(DataType.DECIMAL) previousBalance: string;
  @Column(DataType.DECIMAL) newBalance: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;

  @BelongsTo(() => User) delegatorUser: User;
  @BelongsTo(() => User) delegateeUser: User;
}
