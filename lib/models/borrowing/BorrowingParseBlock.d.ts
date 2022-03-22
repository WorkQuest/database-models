import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class BorrowingParseBlock extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
