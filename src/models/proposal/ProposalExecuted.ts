import {Model, Column, DataType, Table, Scopes} from 'sequelize-typescript';
import {BlockchainNetworks} from "../types";

export enum ProposalExecutedEventType {
    ProposalExecuted = 'ProposalExecuted'
}

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ["id", "network", "event"]
        }
    }
}))
@Table
export class ProposalExecuted extends Model {
    @Column(DataType.STRING) transactionHash: string;
    @Column(DataType.INTEGER) proposalId: number;
    @Column(DataType.BOOLEAN) succeded: boolean;
    @Column(DataType.BOOLEAN) defeated: boolean;
    @Column(DataType.STRING) network: BlockchainNetworks;
    @Column(DataType.STRING) event: ProposalExecutedEventType;
}
