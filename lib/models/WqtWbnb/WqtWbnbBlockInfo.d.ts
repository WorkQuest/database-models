import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
export declare class WqtWbnbBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
