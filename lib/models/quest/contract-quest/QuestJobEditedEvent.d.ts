import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare enum QuestJobEditedStatus {
    QuestStatusDoesNotMatch = -2,
    QuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestJobEditedEvent extends Model {
    contractAddress: string;
    cost: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestJobEditedStatus;
}
