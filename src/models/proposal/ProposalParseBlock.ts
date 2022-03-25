import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

/**
 *                          Metadata Proposals BC
 * Stores the last block on which the event came
 * See BlockchainNetworks - the unique value on which network the data is stored
 */

@Table
export class ProposalParseBlock extends Model {
  @Column({type: DataType.INTEGER, defaultValue: 0}) lastParsedBlock: number;
  @Column({type: DataType.STRING, allowNull: false, unique: true}) network: BlockchainNetworks;
}
