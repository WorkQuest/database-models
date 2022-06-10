import { Model } from "sequelize-typescript";
import { Transaction } from "../Transaction";
import { TransactionStatus } from "../types";
export declare class FaucetWqtWusd extends Model {
    transactionHashFaucetSentToken: string;
    userId: string;
    address: string;
    amount: string;
    symbol: string;
    status: TransactionStatus;
    error: string;
    tx: Transaction;
}
