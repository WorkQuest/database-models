import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class VoteCastEvent extends Model {
    transactionHash: string;
    voter: string;
    proposalId: number;
    support: boolean;
    votes: string;
    timestamp: string;
    network: BlockchainNetworks;
}
