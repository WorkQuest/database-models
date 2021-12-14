import { Media } from "../Media";
import { User } from "../user/User";
import { Model } from "sequelize-typescript";
import { VoteCastEvents } from "./VoteCastEvents";
export declare enum ProposalStatus {
    null = -1,
    Pending = 0,
    Rejected = 1,
    Accepted = 2,
    Cancelled = 3
}
export declare class Proposal extends Model {
    id: string;
    userId: string;
    proposer: string;
    nonceId: string;
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
    voting: VoteCastEvents[];
}
