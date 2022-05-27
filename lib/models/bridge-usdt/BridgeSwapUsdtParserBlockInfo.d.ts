import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class BridgeSwapUsdtParserBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
