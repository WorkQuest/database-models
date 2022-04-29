import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare enum QuestArbitrationAcceptWorkStatus {
    DisputeStatusDoesNotMatch = -2,
    DisputeNotFound = -1,
    Successfully = 0
}
export declare class QuestArbitrationAcceptWorkEvent extends Model {
    contractAddress: string;
    timestamp: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestArbitrationAcceptWorkStatus;
}
