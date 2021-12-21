export enum ProposalStatus {
  Pending  = 0, /** When pending on mempool */
  Active   = 1, /** On event created (see model ProposalCreatedEvent) */
  Rejected = 2, /** On event executed - not enough votes (see model ProposalExecutedEvent) */
  Accepted = 3, /** On event executed - voting passed (see model ProposalExecutedEvent) */
}
