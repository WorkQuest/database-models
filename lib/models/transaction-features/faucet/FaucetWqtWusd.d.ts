import { FaucetSymbol, TransactionStatus } from "../types";
import { Transaction } from "../Transaction";
import { Model } from "sequelize-typescript";
export declare class FaucetWqtWusd extends Model {
    transactionHashFaucetSentToken: string;
    userId: string;
    address: string;
    amount: string;
    symbol: FaucetSymbol;
    status: TransactionStatus;
    error: string;
    tx: Transaction;
}
