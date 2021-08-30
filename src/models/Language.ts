import {Column, DataType, Model, Table, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID } from '../utils';
import {Admin} from "./Admin";

export enum LanguagesEnum {
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

export const languages = Object.values(LanguagesEnum)

@Table
export class Language extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, defaultValue: null}) adminId;

  @Column(DataType.STRING) language: LanguagesEnum;

  @BelongsTo(() => Admin) admin: Admin;
}
