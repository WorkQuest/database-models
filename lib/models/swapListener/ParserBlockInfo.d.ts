import { Model } from 'sequelize-typescript';
export declare class ParserBlockInfo extends Model {
    lastParsedBlock: number;
    network: string;
    contract: string;
}
