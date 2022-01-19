import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class QuestCreatedEvent extends Model {
    nonce: string;
    jobHash: string;
    employerAddress: string;
    contractAddress: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
