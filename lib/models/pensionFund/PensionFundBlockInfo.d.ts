import { BlockchainNetworks } from "../types";
import { Model } from "sequelize-typescript";
export declare class PensionFundBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
