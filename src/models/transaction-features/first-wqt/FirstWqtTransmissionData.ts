import {Transaction} from "../Transaction";
import {BridgeSwapUsdtTokenEvent} from "../../bridge-usdt/BridgeSwapUsdtTokenEvent";
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";


export enum TransmissionStatusFirstWqt {
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

  @Column({ type: DataType.STRING, allowNull: false }) status: TransmissionStatusFirstWqt;

  @Column(DataType.STRING) error: string;

  @HasOne(() => Transaction) tx: Transaction;
  @HasOne(() => BridgeSwapUsdtTokenEvent) bridgeEvent: BridgeSwapUsdtTokenEvent;
}
