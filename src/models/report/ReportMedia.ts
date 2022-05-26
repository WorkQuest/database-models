import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { getUUID } from '../../utils/index';
import { Media } from '../Media';
import { Report } from "./Report";

@Table
export class ReportMedia extends Model {
  @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({ type: DataType.STRING, allowNull: false }) mediaId: string;

  @ForeignKey(() => Report)
  @Column({ type: DataType.STRING, allowNull: false }) reportId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => Report) report: Report;
}
