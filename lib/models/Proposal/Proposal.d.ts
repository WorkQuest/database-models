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
    number: string;
    title: string;
    description: string;
    status: ProposalStatus;
    hash: string;
    fileId: string;
    author: User;
    medias: Media[];
}
