import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum ProposalEvent {
    ProposalCreated = "ProposalCreated"
}
export declare class ProposalCreatedEvents extends Model {
    transactionHash: string;
    proposalId: number;
    nonce: string;
    proposer: string;
    description: string;
    votingPeriod: number;
    minimumQuorum: number;
    timestamp: string;
    network: BlockchainNetworks;
    event: ProposalEvent;
}
