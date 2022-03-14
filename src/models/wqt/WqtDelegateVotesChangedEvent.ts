import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import { BlockchainNetworks } from "../types";

@Table
export class WqtDelegateVotesChangedEvent extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: true }) userId: string;

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
      this.setDataValue('delegateAddress', value.toLowerCase());
    }
  }) delegateAddress: string;

  @Column(DataType.DECIMAL) previousBalance: string;
  @Column(DataType.DECIMAL) newBalance: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) network: BlockchainNetworks;

  @BelongsTo(() => User) user: User;
}
