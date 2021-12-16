import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ProposalVoteCastEvent extends Model {
    transactionHash: string;
    voter: string;
    proposalId: number;
    support: boolean;
    votes: string;
    timestamp: string;
    network: BlockchainNetworks;
}
