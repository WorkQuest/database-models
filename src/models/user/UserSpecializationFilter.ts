import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {IndustryFilter} from "../filtres/IndustryFilter";
import {SpecializationFilter} from "../filtres/SpecializationFilter";
import {User} from "./User";

@Table
export class UserSpecializationFilter extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) userId: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.INTEGER, allowNull: false, references: { model: "IndustryFilters", key: "id" }}) industryKey: number;

  @ForeignKey(() => SpecializationFilter)
  @Column({type: DataType.INTEGER, allowNull: false, references: { model: "SpecializationFilters", key: "id" }}) specializationKey: number;

  /** industryKey.specializationKey => 1.100 */
  @Column({type: DataType.STRING, allowNull: false}) path: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => IndustryFilter) industryFilter: IndustryFilter;
  @BelongsTo(() => SpecializationFilter) specializationFilter: SpecializationFilter;
}
