import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {SpecializationFilter} from "./SpecializationFilter";

// 1.100 IT - Программист
// 1.101 IT - Сисадмин

@Table
export class IndustryFilter extends Model {
  @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER.UNSIGNED}) key: string;

  @Column({type: DataType.STRING, allowNull: false}) industry: string;

  @HasMany(() => SpecializationFilter) specializations: SpecializationFilter[];
}
