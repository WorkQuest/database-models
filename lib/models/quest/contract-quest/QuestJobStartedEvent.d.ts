import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare class QuestJobStartedEvent extends Model {
    contractAddress: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
