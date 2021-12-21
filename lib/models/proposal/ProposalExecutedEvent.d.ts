import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import { Proposal } from "./Proposal";
export declare class ProposalExecutedEvent extends Model {
    id: string;
    proposalId: string;
    network: BlockchainNetworks;
    transactionHash: string;
    contractProposalId: number;
    succeeded: boolean;
    defeated: boolean;
    proposal: Proposal;
}
