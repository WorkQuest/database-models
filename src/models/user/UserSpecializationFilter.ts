import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "./User";
import {getUUID} from "../../utils";
import {IndustryFilter} from "../filtres/IndustryFilter";
import {SpecializationFilter} from "../filtres/SpecializationFilter";

/**
 * Filtering for users by specialization.
 * Each user has a specialization from one to n.
 *
 * See UserSpecializationFilter.path contains industry and specialization keys (IndustryFilter.key, SpecializationFilter.key)
 *    Format: { industryKey }.{ specializationKey }
 *    Example: "1.100" (1 is industryKey, 100 is specializationKey)
 *    Dot separates IndustryFilter.key and SpecializationFilter.key
*/

@Table
export class UserSpecializationFilter extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.INTEGER, allowNull: false}) industryKey: number;

  @ForeignKey(() => SpecializationFilter)
  @Column({type: DataType.INTEGER, allowNull: false}) specializationKey: number;

  @Column({type: DataType.STRING, allowNull: false}) path: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => IndustryFilter) industryFilter: IndustryFilter;
  @BelongsTo(() => SpecializationFilter) specializationFilter: SpecializationFilter;
}
