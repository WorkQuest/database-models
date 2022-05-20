import {BlockchainNetworks} from "../types";
import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class Transaction extends Model {
  @Column({primaryKey: true, type: DataType.STRING, unique: true}) hash: string;

  @Column(DataType.STRING) from: string;
  @Column(DataType.STRING) to: string;

  @Column(DataType.INTEGER) blockNumber: number;

  @Column(DataType.INTEGER) status: number;

  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.DECIMAL) gasUsed: string;

  @Column(DataType.STRING) error: string;
  @Column({ type: DataType.STRING, allowNull: false }) network: BlockchainNetworks;
}
