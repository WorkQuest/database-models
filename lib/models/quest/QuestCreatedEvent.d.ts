import { Model } from "sequelize-typescript";
export declare class QuestCreatedEvent extends Model {
    nonce: string;
    jobHash: string;
    employerAddress: string;
    contractAddress: string;
    transactionHash: string;
}
