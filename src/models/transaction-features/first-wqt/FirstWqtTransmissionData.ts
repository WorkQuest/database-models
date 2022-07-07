import {Transaction} from "../Transaction";
import {TransactionStatus} from "../types";
import {BridgeSwapUsdtTokenEvent} from "../../bridge-usdt/BridgeSwapUsdtTokenEvent";
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";


export enum TransmissionStatusFirstWqt  {
  NoPriceWqtAtMoment = -4,
}

@Table
export class FirstWqtTransmissionData extends Model {
  @ForeignKey(() => Transaction)
  @Column(DataType.STRING) transactionHashTransmissionWqt: string;

  @ForeignKey(() => BridgeSwapUsdtTokenEvent)
  @Column(DataType.STRING) txHashSwapInitialized: string;

  @Column(DataType.INTEGER) gasPriceAtMoment: number;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.DOUBLE) platformCommissionCoefficient: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) status: TransmissionStatusFirstWqt | TransactionStatus;

  @Column(DataType.STRING) error: string;

  @BelongsTo(() => Transaction) tx: Transaction;
  @BelongsTo(() => BridgeSwapUsdtTokenEvent) bridgeEvent: BridgeSwapUsdtTokenEvent;
}
