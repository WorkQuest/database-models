import { BlockchainNetworks } from "../types";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRaiseType } from "./types";

@Table /** Contract event */
export class RaiseViewPromotedUserEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;
  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;

  @Column({type: DataType.STRING, allowNull: false}) user: string;
  @Column({type: DataType.INTEGER, allowNull: false}) tariff: UserRaiseType;
  @Column({type: DataType.STRING, allowNull: false}) period: string; /** timestamp */
  @Column({type: DataType.STRING, allowNull: false}) promotedAt: string;

}
