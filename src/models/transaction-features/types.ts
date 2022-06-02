
export enum TransactionStatus {
  UnknownError = -3,
  BroadcastError = -2,
  TransactionError = -1,

  Pending = 0,
  InProcess = 1,
  Success = 2,
}
