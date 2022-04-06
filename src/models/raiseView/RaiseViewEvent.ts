import {BlockchainNetworks} from "../types";
import {Column, DataType, Model, Table} from "sequelize-typescript";

export enum RaiseViewEventName {
  User = 'PromotedUser',
  Quest = 'PromotedQuest',
}

@Table /** Contract event */
export class RaiseViewEvent extends Model {
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.STRING) timestamp: string;
  @Column(DataType.STRING) transactionHash: string;

  @Column({type: DataType.STRING, allowNull: false}) network: BlockchainNetworks;
  @Column({type: DataType.INTEGER, allowNull: false}) event: RaiseViewEventName;
}
