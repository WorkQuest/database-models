import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
import { QuestRaiseType } from "./types";
export declare class RaiseViewPromotedUserEvent extends Model {
    blockNumber: number;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
    user: string;
    tariff: QuestRaiseType;
    period: string;
    promotedAt: string;
}
