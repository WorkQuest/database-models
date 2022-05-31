import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class SwapUsdtParserBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
