import { BlockchainNetworks } from "../../types";
import { Model } from "sequelize-typescript";
export declare enum QuestAssignedEventStatus {
    WorkerOrQuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestAssignedEvent extends Model {
    workerAddress: string;
    contractAddress: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestAssignedEventStatus;
}
