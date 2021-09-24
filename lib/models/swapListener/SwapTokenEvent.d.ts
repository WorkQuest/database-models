import { Model } from 'sequelize-typescript';
export declare class SwapTokenEvent extends Model {
    transactionHash: string;
    messageHash: string;
    nonce: number;
    active: boolean;
    timestamp: string;
    initiator: string;
    recipient: string;
    amount: number;
    chainTo: number;
    chainFrom: number;
    token: string;
    blockNumber: number;
}
