import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
export declare enum RaiseViewEventName {
    User = "PromotedUser",
    Quest = "PromotedQuest"
}
export declare class RaiseViewEvent extends Model {
    blockNumber: number;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
    event: RaiseViewEventName;
}
