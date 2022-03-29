import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { BorrowingStatus } from "./types";
import { getUUID, getUUIDInt } from "../../utils";
import { User } from "../user/User";
import { BorrowingBorrowedEvent } from "./BorrowingBorrowedEvent";
import { BorrowingRefundedEvent } from "./BorrowingRefundedEvent";

@Table
export class Borrowing extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) userId: string;

  @Column({ type: DataType.DECIMAL, unique: true, allowNull: false, defaultValue: () => getUUIDInt()}) nonce: string;

  @Column({ type: DataType.SMALLINT, defaultValue: BorrowingStatus.Pending }) status: BorrowingStatus;

  @Column(DataType.INTEGER) term: number;
  @Column(DataType.DECIMAL) collateral: string;
  @Column(DataType.DECIMAL) creditAmount: string;
  @Column(DataType.DECIMAL) remainingCredit: string;
  @Column(DataType.STRING) symbol: string;

  /** Events */
  @HasOne(() => BorrowingBorrowedEvent) borrowedEvent: BorrowingBorrowedEvent;
  @HasMany(() => BorrowingRefundedEvent) refundedEvents: BorrowingRefundedEvent[];

  @BelongsTo(() => User) user: User;
}
