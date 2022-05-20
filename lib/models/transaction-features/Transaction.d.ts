import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
export declare class Transaction extends Model {
    hash: string;
    from: string;
    to: string;
    blockNumber: number;
    status: number;
    amount: string;
    gasUsed: string;
    error: string;
    network: BlockchainNetworks;
}
