import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class WqtWethBurnEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) amount0: string;
  @Column(DataType.STRING) amount1: string;
  @Column(DataType.STRING) sender: string;
  @Column(DataType.STRING) to: string;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;
}
