
/**  */
export enum AdType {
  Free = 0,
  Paid,
}

/**   */
export enum QuestEmployment {
  FullTime = 'fullTime',
  PartTime = 'partTime',
  FixedTerm = 'fixedTerm',
}

/** Quest flow statuses */
export enum QuestStatus {
  Created = 0,                       /** The quest is in the state of choosing a worker to complete the quest (invites or responses on quest) */
  Active = 1,                        /** A worker is assigned to the quest and he confirmed the WaitWorker status                             */
  Closed = 2,                        /** The quest is closed and its work is completely completed                                             */
  Dispute = 3,                       /** The quest is in a state of dispute (the dispute was caused by a worker or employer)                  */
  WaitWorker = 4,                    /** Waiting for confirmation of the selected worker to start the quest                                   */
WaitConfirm = 5,                     /** Waiting for confirmation of the completed work from the employer                                     */
  Done = 6,                          /** Complete completion of the quest                                                                     */
}

/**
 * Flow depends on the type (Invite or Response).
 * See QuestsResponseType and conditions in comments.
 */
export enum QuestsResponseStatus {
  /**
   * If QuestsResponseType is Response: the employer rejects worker response.
   * If QuestsResponseType is Invite: the worker rejects the employer's invitation to the quest.
   */
  Rejected = -1,
  /**
   * If QuestsResponseType is Response: the worker responded to the quest.
   * If QuestsResponseType is Invite: the employer invited the employee to the quest.
   */
  Open = 0,
  /**
   * If QuestsResponseType is Invite: the worker accepted the invitation to the quest.
   * If QuestsResponseType is Response: the employer accepted the worker's response.
   */
  Accepted = 1,
  /**
   * If the employer has chosen a worker, all responses are closed
   */
  Closed = 2,
}

export enum QuestsResponseType {
  Response = 0,                      /** The worker responded to the quest */
  Invite = 1,                        /** Employer invited worker on quest  */
}
