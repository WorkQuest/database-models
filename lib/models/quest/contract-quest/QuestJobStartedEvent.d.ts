import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare enum QuestJobStartedEventStatus {
    QuestStatusDoesNotMatch = -2,
    QuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestJobStartedEvent extends Model {
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestJobStartedEventStatus;
}
