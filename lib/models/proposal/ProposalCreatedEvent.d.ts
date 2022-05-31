import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import { Proposal } from "./Proposal";
export declare class ProposalCreatedEvent extends Model {
    id: string;
    proposalId: string;
    network: BlockchainNetworks;
    transactionHash: string;
    contractProposalId: number;
    nonce: string;
    proposer: string;
    description: string;
    votingPeriod: number;
    minimumQuorum: number;
    timestamp: string;
    proposal: Proposal;
}
