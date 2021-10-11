import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {IndustryFilter} from "./IndustryFilter";

@Table
export class SpecializationFilter extends Model {
  @Column({primaryKey: true, type: DataType.INTEGER}) key: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.INTEGER, allowNull: false}) industryKey: number;

  @Column({type: DataType.STRING, allowNull: false}) specialization: string;

  @HasOne(() => IndustryFilter) industry: IndustryFilter;
}
