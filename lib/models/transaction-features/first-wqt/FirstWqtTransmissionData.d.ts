import { Transaction } from "../Transaction";
import { BridgeSwapUsdtTokenEvent } from "../../bridge-usdt/BridgeSwapUsdtTokenEvent";
import { Model } from "sequelize-typescript";
export declare enum TransmissionStatusFirstWqt {
    NoPriceWqtAtMoment = -4,
    UnknownError = -3,
    BroadcastError = -2,
    TransactionError = -1,
    Pending = 0,
    InProcess = 1,
    Success = 2
}
export declare class FirstWqtTransmissionData extends Model {
    transactionHashTransmissionWqt: string;
    txHashSwapInitialized: string;
    gasPriceAtMoment: string;
    amount: string;
    platformCommissionCoefficient: number;
    status: TransmissionStatusFirstWqt;
    error: string;
    tx: Transaction;
    bridgeEvent: BridgeSwapUsdtTokenEvent;
}
