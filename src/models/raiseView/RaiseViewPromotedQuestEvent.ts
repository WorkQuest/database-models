import { BlockchainNetworks } from "../types";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { QuestRaiseType } from "./types";

@Table /** Contract event */
export class RaiseViewPromotedQuestEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;
  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;

  @Column({type: DataType.STRING, allowNull: false}) quest: string;
  @Column({type: DataType.INTEGER, allowNull: false}) tariff: QuestRaiseType;
  @Column({type: DataType.STRING, allowNull: false}) period: string;
  @Column({type: DataType.STRING, allowNull: false}) promotedAt: string;

}
