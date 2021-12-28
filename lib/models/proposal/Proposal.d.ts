import { Media } from "../Media";
import { User } from "../user/User";
import { Model } from "sequelize-typescript";
import { Discussion } from "../discussion/Discussion";
export declare enum ProposalStatus {
    Pending = 0,
    Active = 1,
    Rejected = 2,
    Accepted = 3
}
export declare class Proposal extends Model {
    id: string;
    userId: string;
    discussionId: string;
    title: string;
    description: string;
    proposer: string;
    status: ProposalStatus;
    nonce: string;
    proposalId: number;
    votingPeriod: number;
    minimumQuorum: number;
    timestamp: number;
    txHash: string;
    author: User;
    discussion: Discussion;
    medias: Media[];
}
