import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Borrowing } from "./Borrowing";
import { BlockchainNetworks } from "../types";

@Table
export class BorrowingRefundedEvent extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Borrowing)
  @Column(DataType.STRING) borrowingId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) borrower: string;
  @Column(DataType.DECIMAL) amount: string;

  @BelongsTo(() => Borrowing) borrowing: Borrowing;
}
