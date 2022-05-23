import {BlockchainNetworks} from "../types";
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo, HasOne,
} from "sequelize-typescript";
import {FirstWqtTransmissionData} from "./first-wqt/FirstWqtTransmissionData";

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

  @HasOne(() => FirstWqtTransmissionData) tx: FirstWqtTransmissionData;
}
