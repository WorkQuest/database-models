import { FaucetSymbol, TransactionStatus } from "../types";
import { Transaction } from "../Transaction";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

@Table
export class FaucetWqtWusd extends Model {
  @ForeignKey(() => Transaction)
  @Column({ type: DataType.STRING }) transactionHashFaucetSentToken: string;

  @Column({ type: DataType.STRING, allowNull: false }) userId: string;
  @Column({ type: DataType.STRING, allowNull: false }) address: string;
  @Column({ type: DataType.DECIMAL, allowNull: false }) amount: string;
  @Column({ type: DataType.STRING, allowNull: false }) symbol: FaucetSymbol;

  @Column({ type: DataType.INTEGER, allowNull: false }) status: TransactionStatus;

  @Column(DataType.STRING) error: string;

  @BelongsTo(() => Transaction) tx: Transaction;
}
