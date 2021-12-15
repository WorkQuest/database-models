import {getUUID} from "../../utils";
import {Media} from "../Media";
import {User} from "../user/User";
import {ProposalMedia} from "./ProposalMedia";
import {
    Model,
    Table,
    Column,
    Scopes,
    HasMany,
    DataType,
    BelongsTo,
    ForeignKey,
    BelongsToMany,
} from "sequelize-typescript";

export enum ProposalStatus {
    Pending,
    Active,
    Rejected,
    Accepted,
    Cancelled
}

@Scopes(() => ({
    defaultScope: {
        attributes: {exclude: ["proposalId", "votingPeriod", "minimumQuorum", "timestamp", "txHash", "updatedAt", "createdAt", "deletedAt"]},
        include: [{
            model: Media.scope("urlOnly"),
            as: "medias",
            through: {attributes: []}
        }]
    },
}))
@Table({paranoid: true})
export class Proposal extends Model {
    @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

    @ForeignKey(() => User)
    @Column({type: DataType.STRING, allowNull: false}) userId: string;

    @Column({type: DataType.STRING, allowNull: false}) proposer: string;

    @Column({type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) nonce: string;

    @Column({type: DataType.INTEGER, defaultValue: 0}) proposalId: number;

    @Column({type: DataType.STRING, allowNull: false}) title: string;

    @Column({type: DataType.TEXT, allowNull: false}) description: string;

    @Column({type: DataType.INTEGER, defaultValue: 0}) votingPeriod: number;

    @Column({type: DataType.INTEGER, defaultValue: 0}) minimumQuorum: number;

    @Column({type: DataType.INTEGER, defaultValue: ProposalStatus.Pending}) status: ProposalStatus;

    @Column({type: DataType.INTEGER, defaultValue: null}) timestamp: number;

    @Column({type: DataType.STRING, defaultValue: null}) txHash: string;

    @BelongsTo(() => User) author: User;
    @BelongsToMany(() => Media, () => ProposalMedia) medias: Media[];

    // @HasMany(() => VoteCastEvents) voting: VoteCastEvents[];
}
