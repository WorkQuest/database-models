import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Quest} from "./Quest";
import {SpecializationFilter} from "../filtres/SpecializationFilter";
import {IndustryFilter} from "../filtres/IndustryFilter";

/**
 * Filtering for quests by specialization.
 * Each quest has a specialization from one to n.
 *
 * See QuestSpecializationFilter.path contains industry and specialization keys (IndustryFilter.key, SpecializationFilter.key)
 *    Format: { industryKey }.{ specializationKey }
 *    Example: "1.100" (1 is industryKey, 100 is specializationKey)
 *    Dot separates IndustryFilter.key and SpecializationFilter.key
 */

@Table
export class QuestSpecializationFilter extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.INTEGER, allowNull: false}) industryKey: number;

  @ForeignKey(() => SpecializationFilter)
  @Column({type: DataType.INTEGER, allowNull: false}) specializationKey: number;

  /** industryKey.specializationKey => 1.100 */
  @Column({type: DataType.STRING, allowNull: false}) path: string;

  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => IndustryFilter) industryFilter: IndustryFilter;
  @BelongsTo(() => SpecializationFilter) specializationFilter: SpecializationFilter;
}
