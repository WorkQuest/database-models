import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum ProposalEvent {
    ProposalCreated = "ProposalCreated"
}
export declare class ProposalCreatedEvents extends Model {
    blockNumber: number;
    transactionHash: string;
    timestamp: number;
    proposalId: number;
    proposer: string;
    nonce: number;
    description: string;
    votingPeriod: number;
    minimumQuorum: number;
    network: BlockchainNetworks;
    event: ProposalEvent;
}
