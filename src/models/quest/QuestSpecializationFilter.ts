import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Quest} from "./Quest";
import {SpecializationFilter} from "../filtres/SpecializationFilter";

@Table
export class QuestSpecializationFilter extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @HasOne(() => SpecializationFilter) specialization: SpecializationFilter;
}
