import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table
export class SwapTokenEvent extends Model {
  @Column({type: DataType.STRING, primaryKey: true, allowNull: false}) transactionHash: string;
  @Column({type: DataType.STRING, unique: true}) messageHash: string;
  @Column(DataType.INTEGER) nonce: number;
  @Column(DataType.BOOLEAN) active: boolean;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) initiator: string;
  @Column(DataType.STRING) recipient: string;
  @Column(DataType.DOUBLE) amount: number;
  @Column(DataType.INTEGER) chainTo: number;
  @Column(DataType.INTEGER) chainFrom: number;
  @Column(DataType.STRING) symbol: string;
  @Column(DataType.INTEGER) blockNumber: number;
}
