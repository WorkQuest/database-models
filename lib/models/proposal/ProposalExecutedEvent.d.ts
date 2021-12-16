import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ProposalExecutedEvent extends Model {
    transactionHash: string;
    proposalId: number;
    succeeded: boolean;
    defeated: boolean;
    network: BlockchainNetworks;
}
