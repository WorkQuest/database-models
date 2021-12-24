import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { Proposal } from "./Proposal";
export declare class ProposalMedia extends Model {
    id: string;
    mediaId: string;
    proposalId: string;
    media: Media;
    proposal: Proposal;
}
