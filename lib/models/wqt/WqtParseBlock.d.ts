import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
