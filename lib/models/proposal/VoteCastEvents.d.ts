import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum VoteCastEventType {
    VoteCast = "VoteCast"
}
export declare class VoteCastEvents extends Model {
    blockNumber: number;
    transactionHash: string;
    voter: number;
    proposalId: number;
    support: boolean;
    votes: number;
    timestamp: string;
    network: BlockchainNetworks;
    event: VoteCastEventType;
}
