import {Transaction} from "../Transaction";
import {TransactionStatus} from "../types";
import {QuestDispute} from "../../quest/QuestDispute";
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

export enum QuestDisputeDecision {
  Rework = 'Rework',
  AcceptWork = 'AcceptWork',
  RejectWork = 'RejectWork',
}

@Table
export class QuestDisputeDecisionData extends Model {
  @ForeignKey(() => QuestDispute)
  @Column({ type: DataType.STRING, allowNull: false }) disputeId: string;

  @ForeignKey(() => Transaction)
  @Column(DataType.STRING) transactionHashDisputeResolution: string;

  // TODO ForeignKey Events

  @Column(DataType.STRING) decision: QuestDisputeDecision;

  @Column(DataType.INTEGER) gasPriceAtMoment: string;
  @Column({ type: DataType.INTEGER, allowNull: false }) status: TransactionStatus;

  @Column(DataType.STRING) error: string;
}
