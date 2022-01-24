import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class PensionFundEvents extends Model {
    blockNumber: number;
    event: string;
    user: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
