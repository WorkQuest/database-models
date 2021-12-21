import {getUUID, getUUIDInt} from "../../utils";
import {Media} from "../Media";
import {User} from "../user/User";
import {ProposalMedia} from "./ProposalMedia";
import {
  Model,
  Table,
  Column,
  Scopes,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany, HasOne,
} from "sequelize-typescript";
import {Discussion} from "../discussion/Discussion";

export enum ProposalStatus {
  Pending = 0,      /** When pending on mempool */
  Active = 1,       /** On event created (see model ProposalCreatedEvent) */
  Rejected = 2,     /** On event executed - not enough votes (see model ProposalExecutedEvent) */
  Accepted = 3,     /** On event executed - voting passed (see model ProposalExecutedEvent) */
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["updatedAt", "deletedAt"]
    },
    include: [{
      model: Media.scope("urlOnly"),
      as: "medias",
      through: { attributes: [] }
    }]
  },
}))
@Table({paranoid: true})
export class Proposal extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => Discussion)
  @Column({type: DataType.STRING, allowNull: true}) discussionId: string;

  @Column({type: DataType.STRING, allowNull: false}) title: string;
  @Column({type: DataType.TEXT, allowNull: false}) description: string;
  @Column({type: DataType.STRING, allowNull: false}) proposer: string; // TODO: адрес кошелька User

  @Column({type: DataType.INTEGER, defaultValue: ProposalStatus.Pending}) status: ProposalStatus;

  /**  */
  @Column({type: DataType.DECIMAL, defaultValue: () => getUUIDInt(), unique: true}) nonce: string;

  /**  */
  @Column({type: DataType.INTEGER, defaultValue: null}) proposalId: number;
  @Column({type: DataType.INTEGER, defaultValue: null}) votingPeriod: number;
  @Column({type: DataType.INTEGER, defaultValue: null}) minimumQuorum: number;
  @Column({type: DataType.INTEGER, defaultValue: null}) timestamp: number;
  @Column({type: DataType.STRING, defaultValue: null}) txHash: string;

  @BelongsTo(() => User) author: User;
  @BelongsTo(() => Discussion) discussion: Discussion;
  @BelongsToMany(() => Media, () => ProposalMedia) medias: Media[];
}
