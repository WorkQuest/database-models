import {getUUID} from "../../utils";
import {Media} from "../Media";
import {User} from "../user/User";
import {ProposalMedia} from "./ProposalMidia";
import {
  Model,
  Table,
  Column,
  Scopes,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";

export enum ProposalStatus {
  Pending,
  Accepted,
  Rejected,
}

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }]
  },
}))
@Table({ paranoid: true })
export class Proposal extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({ type: DataType.STRING, allowNull: false}) walletId: string; // from the contract

  @Column({ type: DataType.INTEGER, autoIncrement: true }) number: string;

  @Column({ type: DataType.STRING, allowNull: false }) title: string;

  @Column({ type: DataType.TEXT, allowNull: false }) description: string;

  @Column({ type: DataType.INTEGER, defaultValue: ProposalStatus.Pending }) status: ProposalStatus;

  @Column({ type: DataType.STRING, allowNull: true }) txHash: string;

  @BelongsTo(() => User) author: User;
  @BelongsToMany(() => Media, () => ProposalMedia) medias: Media[];
}
