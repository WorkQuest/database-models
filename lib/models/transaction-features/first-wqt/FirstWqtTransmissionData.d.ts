import { Transaction } from "../Transaction";
import { TransactionStatus } from "../types";
import { BridgeSwapUsdtTokenEvent } from "../../bridge-usdt/BridgeSwapUsdtTokenEvent";
import { Model } from "sequelize-typescript";
export declare enum TransmissionStatusFirstWqt {
    NoPriceWqtAtMoment = -4
}
export declare class FirstWqtTransmissionData extends Model {
    transactionHashTransmissionWqt: string;
    txHashSwapInitialized: string;
    gasPriceAtMoment: string;
    amount: string;
    platformCommissionCoefficient: number;
    status: TransmissionStatusFirstWqt | TransactionStatus;
    error: string;
    tx: Transaction;
    bridgeEvent: BridgeSwapUsdtTokenEvent;
}
