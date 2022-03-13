import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare class QuestJobFinishedEvent extends Model {
    contractAddress: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
