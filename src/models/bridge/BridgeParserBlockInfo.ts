import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

@Table
export class BridgeParserBlockInfo extends Model {
  @Column({type: DataType.INTEGER.UNSIGNED, defaultValue: 0}) lastParsedBlock: number;
  @Column({type: DataType.STRING, allowNull: false, unique: true}) network: BlockchainNetworks;
}
