import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum ProposalEvent {
    ProposalCreated = "ProposalCreated"
}
export declare class ProposalCreatedEvents extends Model {
    blockNumber: number;
    transactionHash: string;
    transId: string;
    proposer: string;
    description: string;
    votingPeriod: string;
    minimumQuorum: string;
    network: BlockchainNetworks;
    event: ProposalEvent;
}
