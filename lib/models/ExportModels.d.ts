import { Model } from 'sequelize-typescript';
export declare class BlockTransaction extends Model {
    blockNumber: number;
    transactionHash: string;
}
