import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class BridgeUSDTParserBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
