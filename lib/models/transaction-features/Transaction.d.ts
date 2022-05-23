import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
import { FirstWqtTransmissionData } from "./first-wqt/FirstWqtTransmissionData";
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
    tx: FirstWqtTransmissionData;
}
