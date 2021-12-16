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
    proposer: string;
    nonce: string;
    proposalId: number;
    title: string;
    description: string;
    votingPeriod: number;
    minimumQuorum: number;
    status: ProposalStatus;
    timestamp: number;
    txHash: string;
    author: User;
    medias: Media[];
}
