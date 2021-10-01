import { Model } from 'sequelize-typescript';
export declare class SwapTokenEvent extends Model {
    transactionHash: string;
    messageHash: string;
    nonce: number;
    active: boolean;
    timestamp: string;
    initiator: string;
    recipient: string;
    amount: string;
    chainTo: number;
    chainFrom: number;
    symbol: string;
    blockNumber: number;
}
