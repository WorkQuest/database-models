import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  title: CommissionTitle;
  currency: CommissionCurrency;
  value: number | null;
}

@Table
export class Commission extends Model {
  @Column({ type: DataType.JSONB, defaultValue: {} }) commission: CommissionList;
}
