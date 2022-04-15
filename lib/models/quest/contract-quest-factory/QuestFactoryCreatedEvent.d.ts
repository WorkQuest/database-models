import { BlockchainNetworks } from "../../types";
import { Model } from "sequelize-typescript";
export declare enum QuestFactoryStatus {
    QuestEntityNotFound = -1,
    Successfully = 0
}
export declare class QuestFactoryCreatedEvent extends Model {
    nonce: string;
    jobHash: string;
    employerAddress: string;
    contractAddress: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
    status: QuestFactoryStatus;
}
