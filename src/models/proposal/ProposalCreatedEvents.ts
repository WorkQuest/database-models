import {Model, Column, DataType, Table, Scopes} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum ProposalEvent {
    ProposalCreated = 'ProposalCreated'
}

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ["id", "network", "event"]
        }
    }
}))
@Table
export class ProposalCreatedEvents extends Model {
    @Column(DataType.INTEGER) blockNumber: number;
    @Column(DataType.STRING) transactionHash: string;
    @Column(DataType.STRING) timestamp: ProposalEvent;
    @Column(DataType.STRING) proposalId: string;
    @Column(DataType.STRING) nonceId: string;
    @Column(DataType.STRING) proposer: string;
    @Column(DataType.TEXT) description: string;
    @Column(DataType.STRING) votingPeriod: string;
    @Column(DataType.STRING) minimumQuorum: string;
    @Column(DataType.STRING) network: BlockchainNetworks;
    @Column(DataType.STRING) event: ProposalEvent;
}
