import { Transaction } from "../Transaction";
import { BridgeSwapUsdtTokenEvent } from "../../bridge-usdt/BridgeSwapUsdtTokenEvent";
import { Model } from "sequelize-typescript";
export declare enum TransmissionStatusFirstWqt {
    UnknownError = -3,
    BroadcastError = -2,
    TransactionError = -1,
    Pending = 0,
    Success = 1
}
export declare class FirstWqtTransmissionData extends Model {
    transactionHashTransmissionWqt: string;
    txHashSwapInitialized: string;
    status: TransmissionStatusFirstWqt;
    error: string;
    tx: Transaction;
    bridgeEvent: BridgeSwapUsdtTokenEvent;
}
