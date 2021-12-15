import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum ProposalExecutedEventType {
    ProposalExecuted = "ProposalExecuted"
}
export declare class ProposalExecuted extends Model {
    transactionHash: string;
    proposalId: number;
    succeded: boolean;
    defeated: boolean;
    network: BlockchainNetworks;
    event: ProposalExecutedEventType;
}
