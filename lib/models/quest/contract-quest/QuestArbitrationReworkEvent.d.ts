import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare enum QuestArbitrationReworkStatus {
    DisputeStatusDoesNotMatch = -3,
    QuestNotFound = -2,
    DisputeNotFound = -1,
    Successfully = 0
}
export declare class QuestArbitrationReworkEvent extends Model {
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestArbitrationReworkStatus;
}
