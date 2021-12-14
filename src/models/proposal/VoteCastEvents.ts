import {Model, Column, DataType, Table, Scopes} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum VoteCastEventType {
    VoteCast = 'VoteCast'
}

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ["id", "network", "event"]
        }
    }
}))
@Table
export class VoteCastEvents extends Model {
    @Column(DataType.INTEGER) blockNumber: number;
    @Column(DataType.STRING) transactionHash: string;
    @Column(DataType.STRING) voter: number;
    @Column(DataType.INTEGER) proposalId: number;
    @Column(DataType.BOOLEAN) support: boolean;
    @Column(DataType.INTEGER) votes: number;
    @Column(DataType.STRING) timestamp: string;
    @Column(DataType.STRING) network: BlockchainNetworks;
    @Column(DataType.STRING) event: VoteCastEventType;
}
