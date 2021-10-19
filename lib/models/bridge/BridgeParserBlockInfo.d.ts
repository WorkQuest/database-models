import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class BridgeParserBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
