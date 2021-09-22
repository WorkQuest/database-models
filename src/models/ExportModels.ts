import {
    Column, DataType, Model, Table,
} from 'sequelize-typescript';

// Additional entities
@Table
export class BlockTransaction extends Model {
    // block transaction data when created
    @Column(DataType.BIGINT)
    blockNumber: number

    @Column(DataType.STRING)
    transactionHash: string
}
