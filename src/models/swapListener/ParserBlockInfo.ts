import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class ParserBlockInfo extends Model {
  @Column({type: DataType.INTEGER.UNSIGNED, defaultValue: 0}) lastParsedBlock: number;
  @Column({type: DataType.STRING, allowNull: false}) network: string;
  @Column({type: DataType.STRING, allowNull: false}) contract: string;
}
