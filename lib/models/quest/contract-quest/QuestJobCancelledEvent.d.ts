import { BlockchainNetworks } from "../../types";
import { Model } from "sequelize-typescript";
export declare enum QuestJobCancelledEventStatus {
    QuestStatusDoesNotMatch = -2,
    QuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestJobCancelledEvent extends Model {
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestJobCancelledEventStatus;
}
