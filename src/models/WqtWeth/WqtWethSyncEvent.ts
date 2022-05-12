import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class WqtWethSyncEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) reserve0: string;
  @Column(DataType.STRING) reserve1: string;
  @Column(DataType.STRING) timestamp: string;
  @Column({ type: DataType.STRING, primaryKey: true }) transactionHash: string;
}

