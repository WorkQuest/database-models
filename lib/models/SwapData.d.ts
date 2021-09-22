import { BlockTransaction } from "./ExportModels";
export declare class SwapData extends BlockTransaction {
    transactionHash: string;
    nonce: number;
    active: boolean;
    timestamp: string;
    messageHash: string;
    initiator: string;
    recipient: string;
    amount: number;
    chainTo: number;
    chainFrom: number;
    token: string;
}
