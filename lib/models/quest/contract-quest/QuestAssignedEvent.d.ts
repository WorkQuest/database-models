import { BlockchainNetworks } from "../../types";
import { Model } from "sequelize-typescript";
export declare enum QuestAssignedEventStatus {
    QuestStatusDoesNotMatch = -2,
    WorkerOrQuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestAssignedEvent extends Model {
    workerAddress: string;
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestAssignedEventStatus;
}
