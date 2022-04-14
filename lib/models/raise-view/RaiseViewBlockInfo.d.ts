import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class RaiseViewBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
