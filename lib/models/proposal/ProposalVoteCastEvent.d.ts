import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import { Proposal } from "./Proposal";
export declare class ProposalVoteCastEvent extends Model {
    id: string;
    proposalId: string;
    network: BlockchainNetworks;
    transactionHash: string;
    voter: string;
    contractProposalId: number;
    support: boolean;
    votes: string;
    timestamp: string;
    proposal: Proposal;
}
