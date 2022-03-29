import { Model } from "sequelize-typescript";
import { BorrowingStatus } from "./types";
import { User } from "../user/User";
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
    user: User;
}
