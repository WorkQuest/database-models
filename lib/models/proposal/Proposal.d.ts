import { Media } from "../Media";
import { User } from "../user/User";
import { ProposalStatus } from "./types";
import { Discussion } from "../discussion/Discussion";
import { ProposalCreatedEvent } from "./ProposalCreatedEvent";
import { ProposalExecutedEvent } from "./ProposalExecutedEvent";
import { ProposalVoteCastEvent } from "./ProposalVoteCastEvent";
import { Model } from "sequelize-typescript";
export declare class Proposal extends Model {
    id: string;
    proposerUserId: string;
    discussionId: string;
    title: string;
    description: string;
    status: ProposalStatus;
    nonce: string;
    createdEvent: ProposalCreatedEvent;
    executedEvent: ProposalExecutedEvent;
    voteCastEvents: ProposalVoteCastEvent[];
    proposerUser: User;
    discussion: Discussion;
    medias: Media[];
}
