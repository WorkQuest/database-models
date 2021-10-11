import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {IndustryFilter} from "./IndustryFilter";

@Table
export class SpecializationFilter extends Model {
  @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER.UNSIGNED}) key: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.STRING, defaultValue: null}) industryKey: number;

  @Column({type: DataType.STRING, allowNull: false}) specialization: string;

  @HasOne(() => IndustryFilter) industry: IndustryFilter;
}
