import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import {IndustryFilter} from "./IndustryFilter";
import {Quest} from "../quest/Quest";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: [{
      model: IndustryFilter,
      as: 'industryFilter',
    }]
  }
}))
@Table
export class SpecializationFilter extends Model {
  @Column({primaryKey: true, type: DataType.INTEGER}) key: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.INTEGER, allowNull: false, references: { model: "IndustryFilters", key: "id" }}) industryKey: number;

  @Column({type: DataType.STRING, allowNull: false}) specialization: string;

  @BelongsTo(() => IndustryFilter) industryFilter: IndustryFilter;
}
