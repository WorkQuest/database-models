import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class QuestFactoryBlockInfo extends Model {
    lastParsedBlock: number;
    network: BlockchainNetworks;
}
