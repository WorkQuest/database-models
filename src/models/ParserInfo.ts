import {
  Column, DataType, Model, Table,
} from 'sequelize-typescript';

export interface ParserInfoPayload {
  lastParsedBlock: number,
}

const defaultParserInfoPayload: ParserInfoPayload = {
  lastParsedBlock: 0,
};

@Table
export class ParserInfo extends Model {
  @Column({ type: DataType.JSONB, defaultValue: defaultParserInfoPayload, })
  info: ParserInfoPayload

  @Column({type: DataType.STRING, primaryKey: true})
  network: string

  @Column({type: DataType.STRING, primaryKey: true})
  contract: string
}
