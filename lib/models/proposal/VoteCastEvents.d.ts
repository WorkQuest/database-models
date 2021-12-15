import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum VoteCastEventType {
    VoteCast = "VoteCast"
}
export declare class VoteCastEvents extends Model {
    transactionHash: string;
    voter: string;
    proposalId: number;
    support: boolean;
    votes: string;
    timestamp: string;
    network: BlockchainNetworks;
    event: VoteCastEventType;
}
