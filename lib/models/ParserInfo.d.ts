import { Model } from 'sequelize-typescript';
export interface ParserInfoPayload {
    lastParsedBlock: number;
}
export declare class ParserInfo extends Model {
    info: ParserInfoPayload;
    network: string;
    contract: string;
}
