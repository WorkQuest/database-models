import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare enum QuestArbitrationStartedStatus {
    DisputeStatusDoesNotMatch = -3,
    QuestNotFound = -2,
    DisputeNotFound = -1,
    Successfully = 0
}
export declare class QuestArbitrationStartedEvent extends Model {
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestArbitrationStartedStatus;
}
