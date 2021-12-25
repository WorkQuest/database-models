import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Media} from '../Media';
import {QuestsResponse} from "./QuestsResponse";

@Table
export class QuestResponseMedia extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Media) @Column({type: DataType.STRING, allowNull: false}) mediaId: string;
  @ForeignKey(() => QuestsResponse) @Column({type: DataType.STRING, allowNull: false}) questResponseId: string;

  @BelongsTo(() => Media) media: Media;
  @BelongsTo(() => QuestsResponse) questResponse: QuestsResponse;
}
