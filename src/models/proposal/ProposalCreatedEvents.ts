import {Model, Column, DataType, Table} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum ProposalEvent {
    ProposalCreated = 'ProposalCreated'
}

@Table
export class ProposalCreatedEvents extends Model {
    @Column(DataType.INTEGER) blockNumber: number;
    @Column(DataType.STRING) transactionHash: string;
    @Column(DataType.STRING) transId: string;
    @Column(DataType.STRING) proposer: string;
    @Column(DataType.TEXT) description: string;
    @Column(DataType.STRING) votingPeriod: string;
    @Column(DataType.STRING) minimumQuorum: string;
    @Column(DataType.STRING) network: BlockchainNetworks;
    @Column(DataType.STRING) event: ProposalEvent;
}
