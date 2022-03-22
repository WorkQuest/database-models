import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { BorrowingStatus } from "./types";
import { getUUID } from "../../utils";
import { User } from "../user/User";

@Table
export class Borrowing extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) userId: string;

  @Column({ type: DataType.DECIMAL, unique: true }) nonce: string;

  @Column(DataType.SMALLINT) status: BorrowingStatus;

  @Column(DataType.DECIMAL) collateral: string;
  @Column(DataType.DECIMAL) creditAmount: string;
  @Column(DataType.DECIMAL) remainingCredit: string;
  @Column(DataType.STRING) symbol: string;

  @BelongsTo(() => User) user: User;
}
