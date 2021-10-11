import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Quest} from "./Quest";
import {SpecializationFilter} from "../filtres/SpecializationFilter";
import {IndustryFilter} from "../filtres/IndustryFilter";

@Table
export class QuestSpecializationFilter extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => IndustryFilter)
  @Column({type: DataType.STRING, defaultValue: null}) industryKey: number;

  @ForeignKey(() => SpecializationFilter)
  @Column({type: DataType.STRING, allowNull: false}) specializationKey: string;
}
