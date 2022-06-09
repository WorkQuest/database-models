import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ProposalParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
