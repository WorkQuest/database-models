import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Media} from "../Media";
import {Proposal} from "./Proposal";

@Table
export class ProposalMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, allowNull: false}) mediaId: string;

  @ForeignKey(() => Proposal)
  @Column({type: DataType.STRING, allowNull: false}) proposalId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => Proposal) proposal: Proposal;
}
