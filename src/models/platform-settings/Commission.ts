import {Column, DataType, Model, Table} from 'sequelize-typescript';

export enum CommissionTitle {
  CommissionSwapWQT = 'CommissionSwapWQT',
}

export enum CommissionCurrency {
  WQT = 'WQT',
  ETH = 'ETH',
  BNB = 'BNB',
  USDT = "USDT",
  Percent = '%',
}

export interface CommissionList {
  currency: CommissionCurrency;
  value: number | null;
}

@Table
export class Commission extends Model {
  @Column({ primaryKey: true, type: DataType.STRING}) title: CommissionTitle;
  @Column({ type: DataType.JSONB, defaultValue: {} }) commission: CommissionList;
}
