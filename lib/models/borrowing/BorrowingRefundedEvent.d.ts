import { Model } from "sequelize-typescript";
import { Borrowing } from "./Borrowing";
import { BlockchainNetworks } from "../types";
export declare class BorrowingRefundedEvent extends Model {
    id: string;
    borrowingId: string;
    network: BlockchainNetworks;
    transactionHash: string;
    nonce: string;
    borrower: string;
    amount: string;
    timestamp: string;
    borrowing: Borrowing;
}
