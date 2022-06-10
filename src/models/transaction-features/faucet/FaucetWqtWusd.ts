import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Transaction } from "../Transaction";
import { TransactionStatus } from "../types";

@Table
export class FaucetWqtWusd extends Model {
  @ForeignKey(() => Transaction)
  @Column({ type: DataType.STRING }) transactionHashFaucetSentToken: string;

  @Column({ type: DataType.STRING, allowNull: false }) userId: string;
  @Column({ type: DataType.STRING, allowNull: false }) address: string;
  @Column({ type: DataType.DECIMAL, allowNull: false }) amount: string;
  @Column({ type: DataType.STRING, allowNull: false }) symbol: string;

  @Column({ type: DataType.INTEGER, allowNull: false }) status: TransactionStatus;

  @BelongsTo(() => Transaction) tx: Transaction;
}
