import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
export declare class WqtWethBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
