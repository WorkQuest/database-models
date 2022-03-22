import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Borrowing } from "./Borrowing";
import { getUUID } from "../../utils";

@Table
export class BorrowingBorrowedEvent extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Borrowing)
  @Column(DataType.STRING) borrowingId: string;

  @Column(DataType.STRING) network: BlockchainNetworks;

  @Column(DataType.STRING) transactionHash: string;
  @Column(DataType.DECIMAL) nonce: string;
  @Column(DataType.STRING) borrower: string;
  @Column(DataType.DECIMAL) collateral: string;
  @Column(DataType.DECIMAL) credit: string;
  @Column(DataType.STRING) symbol: string;
  @Column(DataType.DECIMAL) timestamp: string;

  @BelongsTo(() => Borrowing) borrowing: Borrowing;
}
