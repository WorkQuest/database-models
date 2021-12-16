import { Media } from "../Media";
import { User } from "../user/User";
import { Model } from "sequelize-typescript";
export declare enum ProposalStatus {
    Pending = 0,
    Active = 1,
    Rejected = 2,
    Accepted = 3
}
export declare class Proposal extends Model {
    id: string;
    userId: string;
    title: string;
    description: string;
    status: ProposalStatus;
    nonce: string;
    proposer: string;
    proposalId: number;
    votingPeriod: number;
    minimumQuorum: number;
    timestamp: number;
    txHash: string;
    author: User;
    medias: Media[];
}
