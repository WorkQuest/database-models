import {getUUID, getUUIDInt} from "../../utils";
import {Media} from "../Media";
import {User} from "../user/User";
import {ProposalStatus} from "./types";
import {ProposalMedia} from "./ProposalMedia";
import {Discussion} from "../discussion/Discussion";
import {ProposalCreatedEvent} from "./ProposalCreatedEvent";
import {ProposalExecutedEvent} from "./ProposalExecutedEvent";
import {ProposalVoteCastEvent} from "./ProposalVoteCastEvent";
import {
  Model,
  Table,
  Column,
  Scopes,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany, HasOne, HasMany,
} from "sequelize-typescript";

/**
 *                  DAO Proposals
 * Contract.
 *
 * Discussion auto created (One Proposal - One Discussion) when status ProposalStatus.Active.
 *
 * Nonce (Proposal.nonce) is unique value set when creating (this may not yet be on the BC of the contract)
 *    Necessary to eliminate the conflict when creating multiple proposals on the contract while the transactions
 *    is in the mempool.
 *
 * TODO: Proposer
 *
 * See events for Proposal.
 */

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
@Table({ paranoid: true })
export class Proposal extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => Discussion) /** Auto created Discussion when status ProposalStatus.Active */
  @Column({type: DataType.STRING, allowNull: true}) discussionId: string;

  @Column({type: DataType.STRING, allowNull: false}) title: string;
  @Column({type: DataType.TEXT, allowNull: false}) description: string;

  @Column({type: DataType.INTEGER, defaultValue: ProposalStatus.Pending}) status: ProposalStatus;

  /** Unique value for proposer */
  @Column({unique: true, allowNull: false, type: DataType.DECIMAL, defaultValue: () => getUUIDInt()}) nonce: string;

  /** Events */
  @HasOne(() => ProposalCreatedEvent) createdEvent: ProposalCreatedEvent;
  @HasOne(() => ProposalExecutedEvent) executedEvent: ProposalExecutedEvent;
  @HasMany(() => ProposalVoteCastEvent) voteCastEvents: ProposalVoteCastEvent[];

  @BelongsTo(() => User) author: User;
  @BelongsTo(() => Discussion) discussion: Discussion;
  @BelongsToMany(() => Media, () => ProposalMedia) medias: Media[];
}
