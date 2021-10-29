import {BelongsTo, Column, DataType, Model, Scopes, Table, HasMany} from "sequelize-typescript";
import {SpecializationFilter} from "./SpecializationFilter";

// 1.100 IT - Программист
// 1.101 IT - Сисадмин

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    }
  }
}))
@Table
export class IndustryFilter extends Model {
  @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER}) key: number;

  @Column({type: DataType.STRING, allowNull: false}) industry: string;

  @HasMany(() => SpecializationFilter) specialisationFilters: SpecializationFilter[];
}
