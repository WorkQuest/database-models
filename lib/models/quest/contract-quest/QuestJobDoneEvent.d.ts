import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare enum QuestJobDoneStatus {
    QuestStatusDoesNotMatch = -2,
    QuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestJobDoneEvent extends Model {
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestJobDoneStatus;
}
