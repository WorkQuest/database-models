export enum BorrowingStatus {
  Pending  = 0,                         /** When pending on mempool */
  Active   = 1,                         /** On borrowing event (see model BorrowingBorrowedEvent) */
  Closed   = 2,                         /** With a closed borrowing */
  Unpaid   = 3                          /** WIth an unpaid borrowing */
}
