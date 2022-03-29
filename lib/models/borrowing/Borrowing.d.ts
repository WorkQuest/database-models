import { Model } from "sequelize-typescript";
import { BorrowingStatus } from "./types";
import { User } from "../user/User";
import { BorrowingBorrowedEvent } from "./BorrowingBorrowedEvent";
import { BorrowingRefundedEvent } from "./BorrowingRefundedEvent";
export declare class Borrowing extends Model {
    id: string;
    userId: string;
    nonce: string;
    status: BorrowingStatus;
    term: number;
    collateral: string;
    creditAmount: string;
    remainingCredit: string;
    symbol: string;
    borrowedEvent: BorrowingBorrowedEvent;
    refundedEvents: BorrowingRefundedEvent[];
    user: User;
}
