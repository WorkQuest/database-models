import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Borrowing } from "./Borrowing";
export declare class BorrowingBorrowedEvent extends Model {
    id: string;
    borrowingId: string;
    network: BlockchainNetworks;
    transactionHash: string;
    nonce: string;
    borrower: string;
    collateral: string;
    credit: string;
    symbol: string;
    timestamp: string;
    borrowing: Borrowing;
}
