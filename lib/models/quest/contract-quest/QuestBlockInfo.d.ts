import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../../types";
export declare class QuestBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
