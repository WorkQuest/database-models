import {getUUID, getUUIDInt} from "../../utils";
import {ProposalStatus} from "./types";
import {Media} from "../Media";
import {User} from "../user/User";
import {ProposalMedia} from "./ProposalMedia";
import {Discussion} from "../discussion/Discussion"
import {ProposalCreatedEvent} from "./ProposalCreatedEvent";
import {ProposalVoteCastEvent} from "./ProposalVoteCastEvent";
import {ProposalExecutedEvent} from "./ProposalExecutedEvent";
import {
  Model,
  Table,
  Column,
  Scopes,
  HasOne,
  HasMany,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";

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

  @ForeignKey(() => Discussion) /** Auto created Discussion when status ProposalStatus.Active */
  @Column({type: DataType.STRING, allowNull: true}) discussionId: string;

  @Column({type: DataType.STRING, allowNull: false}) title: string;
  @Column({type: DataType.TEXT, allowNull: false}) description: string;
  @Column({type: DataType.STRING, allowNull: false}) proposer: string; // TODO: адрес кошелька User

  @Column({type: DataType.INTEGER, defaultValue: ProposalStatus.Pending}) status: ProposalStatus;

  /** Unique value for proposer */
  @Column({unique: true, allowNull: false, type: DataType.DECIMAL, defaultValue: () => getUUIDInt() }) nonce: string;

  @HasOne(() => ProposalCreatedEvent) createdEvent: ProposalCreatedEvent;
  @HasOne(() => ProposalExecutedEvent) executedEvent: ProposalExecutedEvent;
  @HasMany(() => ProposalVoteCastEvent) voteCastEvents: ProposalVoteCastEvent[];

  @BelongsTo(() => User) author: User;
  @BelongsTo(() => Discussion) discussion: Discussion;
  @BelongsToMany(() => Media, () => ProposalMedia) medias: Media[];
}
