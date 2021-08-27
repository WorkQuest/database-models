import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID, error } from '../utils';
import {Admin} from "./Admin";

export enum Languages {
  en = "en",
  ru = "ru",
  ba = "ba",
  zh = "zh",
  fr = "fr",
  hi = "hi",
  in = "in",
  po = "po",
  sp = "sp",
  ae = "ae",
}

@Table
export class Language extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, defaultValue: null}) adminId;

  @Column(DataType.STRING) language: Languages;

  @BelongsTo(() => Admin) admin: Admin;
}
