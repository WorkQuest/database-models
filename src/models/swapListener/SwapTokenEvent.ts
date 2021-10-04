import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table
export class SwapTokenEvent extends Model {
  @Column({type: DataType.STRING, primaryKey: true, allowNull: false}) transactionHash: string;
  @Column({type: DataType.STRING, unique: true}) messageHash: string;
  @Column({type:DataType.INTEGER, allowNull: true}) nonce: number;
  @Column({type:DataType.BOOLEAN, defaultValue: true}) active: boolean;
  @Column({type:DataType.STRING, allowNull: false}) timestamp: string;
  @Column({type:DataType.STRING, allowNull: false}) initiator: string;
  @Column({type:DataType.STRING, allowNull: false}) recipient: string;
  @Column({type:DataType.DECIMAL, allowNull: false}) amount: string;
  @Column({type:DataType.INTEGER, allowNull: true}) chainTo: number;
  @Column({type:DataType.INTEGER, allowNull: true}) chainFrom: number;
  @Column({type:DataType.STRING}) symbol: string;
  @Column(DataType.INTEGER) blockNumber: number;
}
