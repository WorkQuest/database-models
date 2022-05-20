import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {SwapUsdtSwapTokenEvent} from "../../SwapUsdt/SwapUsdtSwapTokenEvent";


export enum TransmissionStatusFirstWqt {
  BroadcastError = -2,
  TransactionError = -1,

  Pending = 0,
  Success = 1,
}

@Table
export class FirstWqtTransmissionData extends Model {
  @Column(DataType.STRING) transactionHashTransmissionWqt: string;

  @ForeignKey(() => SwapUsdtSwapTokenEvent)
  @Column(DataType.STRING) txHashSwapInitialized: string;

  @Column({ type: DataType.STRING, allowNull: false }) status: TransmissionStatusFirstWqt;

  @Column(DataType.STRING) error: string;
}
