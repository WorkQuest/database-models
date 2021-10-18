import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../utils';
import { User } from './user/User';

export enum ContentType {
  mp4 = 'video/mp4',
  jpeg = 'image/jpeg',
  png = 'image/png',
  pdf = 'application/pdf',
  DOC = 'application/msword'
}

@Table({
  scopes: {
    urlOnly: {
      attributes: ["id", "url", "contentType"]
    }
  }
})
export class Media extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.STRING, allowNull: false}) contentType: ContentType;
  @Column({type: DataType.TEXT, allowNull: false}) url: string;
  @Column({type: DataType.STRING, allowNull: false}) hash: string;

  @BelongsTo(() => User) user: User;
}
