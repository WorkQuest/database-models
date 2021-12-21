import { ProposalStatus } from "./types";
import { Media } from "../Media";
import { User } from "../user/User";
import { ProposalCreatedEvent } from "./ProposalCreatedEvent";
import { ProposalVoteCastEvent } from "./ProposalVoteCastEvent";
import { ProposalExecutedEvent } from "./ProposalExecutedEvent";
import { Model } from "sequelize-typescript";
export declare class Proposal extends Model {
    id: string;
    userId: string;
    title: string;
    description: string;
    proposer: string;
    status: ProposalStatus;
    nonce: string;
    createdEvent: ProposalCreatedEvent;
    executedEvent: ProposalExecutedEvent;
    voteCastEvents: ProposalVoteCastEvent[];
    author: User;
    medias: Media[];
}
