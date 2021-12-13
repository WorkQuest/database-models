import { Media } from "../Media";
import { User } from "../user/User";
import { Model } from "sequelize-typescript";
export declare enum ProposalStatus {
    Pending = 0,
    Accepted = 1,
    Rejected = 2
}
export declare class Proposal extends Model {
    id: string;
    userId: string;
    walletId: string;
    number: string;
    title: string;
    description: string;
    status: ProposalStatus;
    txHash: string;
    author: User;
    medias: Media[];
}
