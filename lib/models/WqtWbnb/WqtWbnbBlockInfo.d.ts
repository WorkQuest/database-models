import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtWbnbBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
