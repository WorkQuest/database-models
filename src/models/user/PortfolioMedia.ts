import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { Media } from '../Media';
import { Portfolio } from './Portfolio';

@Table
export class PortfolioMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Media) @Column({type: DataType.STRING, allowNull: false, references: { model: "Medias", key: "id" }}) mediaId: string;
  @ForeignKey(() => Portfolio) @Column({type: DataType.STRING, allowNull: false, references: { model: "Portfolios", key: "id" }}) portfolioId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => Portfolio) portfolio: Portfolio;
}
