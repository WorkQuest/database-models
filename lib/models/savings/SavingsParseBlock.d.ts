import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class SavingsParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
