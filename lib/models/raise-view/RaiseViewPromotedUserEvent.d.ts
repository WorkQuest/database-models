import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
import { UserRaiseType } from "./types";
export declare class RaiseViewPromotedUserEvent extends Model {
    blockNumber: number;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
    user: string;
    tariff: UserRaiseType;
    period: string;
    promotedAt: string;
}
