import { Model, Column, DataType, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { SwapUsdtSwapTokenEvent } from "./SwapUsdtSwapTokenEvent";
import { BlockchainNetworks } from "../types";
import { swapUsdtStatus } from "./types";


@Table
export class SwapUsdtSendWqt extends Model {
  @Column({ primaryKey: true, type: DataType.STRING}) transactionHash: string;

  @ForeignKey(() => SwapUsdtSwapTokenEvent)
  @Column(DataType.STRING) txHashSwapInitialized: string;

  @Column(DataType.STRING) userId: string;
  @Column(DataType.INTEGER) blockNumber: number;
  @Column(DataType.INTEGER) ratio: number;
  @Column(DataType.STRING) network: BlockchainNetworks;
  @Column(DataType.STRING) status: swapUsdtStatus;
  @Column(DataType.DECIMAL) amount: string;
  @Column(DataType.DECIMAL) gasUsed: string;

  @BelongsTo(() => SwapUsdtSwapTokenEvent) txHashSwap: SwapUsdtSwapTokenEvent;
}
