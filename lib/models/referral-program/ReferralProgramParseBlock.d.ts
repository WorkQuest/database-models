import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralProgramParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
