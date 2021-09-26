import {
    Column, DataType,
    Table,
} from 'sequelize-typescript';
import {BlockTransaction} from "./ExportModels";


@Table
export class SwapData extends BlockTransaction {
    @Column({type: DataType.STRING, primaryKey: true, allowNull: false})
    transactionHash: string;

    @Column(DataType.BIGINT)
    nonce: number

    @Column({type: DataType.BOOLEAN,}) active: boolean;

    @Column({type: DataType.STRING }) timestamp: string;

    @Column({type: DataType.STRING, unique:true }) messageHash: string;

    @Column({type: DataType.STRING }) initiator: string;

    @Column({type: DataType.STRING }) recipient: string;

    @Column({type: DataType.DOUBLE,}) amount: number;

    @Column({type: DataType.INTEGER,}) chainTo: number;

    @Column({type: DataType.INTEGER,}) chainFrom: number;

    @Column({type: DataType.STRING,}) symbol: string;

}
