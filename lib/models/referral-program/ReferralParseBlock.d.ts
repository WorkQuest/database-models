import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
