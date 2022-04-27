import {BlockchainNetworks} from "../types";
import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class WqtWethBlockInfo extends Model {
  @Column({type: DataType.INTEGER, defaultValue: 0}) lastParsedBlock: number;
  @Column({type: DataType.STRING, allowNull: false, unique: true}) network: BlockchainNetworks;
}
