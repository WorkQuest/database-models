import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class SavingProductParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
