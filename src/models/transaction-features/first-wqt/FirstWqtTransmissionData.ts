import {Transaction} from "../Transaction";
import {BridgeSwapUsdtTokenEvent} from "../../bridge-usdt/BridgeSwapUsdtTokenEvent";
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";


export enum TransmissionStatusFirstWqt {
  NoPriceWqtAtMoment = -4,
  UnknownError = -3,
  BroadcastError = -2,
  TransactionError = -1,

  Pending = 0,
  InProcess = 1,
  Success = 2,
}

@Table
export class FirstWqtTransmissionData extends Model {
  @ForeignKey(() => Transaction)
  @Column(DataType.STRING) transactionHashTransmissionWqt: string;

  @ForeignKey(() => BridgeSwapUsdtTokenEvent)
  @Column(DataType.STRING) txHashSwapInitialized: string;

  @Column(DataType.INTEGER) gasPriceAtMoment: string;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.DOUBLE) platformCommissionCoefficient: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) status: TransmissionStatusFirstWqt;

  @Column(DataType.STRING) error: string;

  @BelongsTo(() => Transaction) tx: Transaction;
  @BelongsTo(() => BridgeSwapUsdtTokenEvent) bridgeEvent: BridgeSwapUsdtTokenEvent;
}
