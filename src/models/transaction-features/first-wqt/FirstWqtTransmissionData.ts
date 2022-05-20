import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {SwapUsdtSwapTokenEvent} from "../../SwapUsdt/SwapUsdtSwapTokenEvent";

@Table
export class FirstWqtTransmissionData extends Model {
  @Column(DataType.STRING) transactionHashTransferWqt: string;

  @ForeignKey(() => SwapUsdtSwapTokenEvent)
  @Column(DataType.STRING) txHashSwapInitialized: string;

  @Column(DataType.STRING) error: string;
}
