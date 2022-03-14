import { Model } from "sequelize-typescript";
import { User } from "../user/User";
export declare class WqtDelegateVotesChangedEvent extends Model {
    id: string;
    userId: string;
    transactionHash: string;
    delegateAddress: string;
    previousBalance: string;
    newBalance: string;
    blockNumber: number;
    timestamp: string;
    user: User;
}
