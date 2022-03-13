import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare class QuestJobDoneEvent extends Model {
    contractAddress: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
