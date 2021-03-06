export enum DaoPlatformStatisticFields {
  Votes = 'votes',
  DelegatedValue = 'delegatedValue',
  VotesFor = 'votesFor',
  VotesAgain = 'votesAgain',
}

export enum DisputesPlatformStatisticFields {
  Total = 'total',
  Pending = 'pending',
  Created = 'created',
  InProgress = 'inProgress',
  PendingClosed = 'pendingClosed',
  Closed = 'closed'
}

export enum QuestsPlatformStatisticFields {
  Total = 'total',
  Closed = 'closed',
  Dispute = 'dispute',
  Blocked = 'blocked',
  Pending = 'pending',
  Recruitment = 'recruitment',
  WaitingForConfirmFromWorkerOnAssign = 'waitingForConfirmFromWorkerOnAssign',
  ExecutionOfWork = 'executionOfWork',
  WaitingForEmployerConfirmationWork = 'waitingForEmployerConfirmationWork',
  Completed = 'completed',
  Sum = 'sum'
}

export enum RaiseViewsPlatformStatisticFields {
  ProfilesSum = 'profilesSum',
  ProfilesTotal = 'profilesTotal',
  ProfilesGoldPlus = 'profilesGoldPlus',
  ProfilesGold = 'profilesGold',
  ProfilesSilver = 'profilesSilver',
  ProfilesBronze = 'profilesBronze',
  QuestsSum = 'questsSum',
  QuestsTotal = 'questsTotal',
  QuestsGoldPlus = 'questsGoldPlus',
  QuestsGold = 'questsGold',
  QuestsSilver = 'questsSilver',
  QuestsBronze = 'questsBronze',
}

export enum ReportsPlatformStatisticFields {
  Users = 'users',
  DeclinedUsers = 'declinedUsers',
  DecidedUsers = 'decidedUsers',
  Quests = 'quests',
  DeclinedQuests = 'declinedQuests',
  DecidedQuests = 'decidedQuests',
}

export enum UsersPlatformStatisticFields {
  Registered = 'registered',
  Finished = 'finished',
  Unfinished = 'unfinished',
  Workers = 'workers',
  Employers = 'employers',
  Linkedin = 'linkedin',
  Twitter = 'twitter',
  Facebook = 'facebook',
  Google = 'google',
  SmsPassed = 'smsPassed',
  SmsNotPassed = 'smsNotPassed',
  KycPassed = 'kycPassed',
  KycNotPassed = 'kycNotPassed',
  UseWeb = 'useWeb',
  UseApp = 'useApp',
  UseWallet = 'useWallet',
  Use2FA = 'use2FA',
  NoStatus = 'noStatus',
  Verified = 'verified',
  Reliable = 'reliable',
  TopRanked = 'topRanked',
  AverageSessionTime = 'averageSessionTime'
}

export const daoPlatformStatisticFieldsArray = Object.values(DaoPlatformStatisticFields) as string[];
export const disputesPlatformStatisticFieldsArray = Object.values(DisputesPlatformStatisticFields) as string[];
export const questsPlatformStatisticFieldsArray = Object.values(QuestsPlatformStatisticFields) as string[];
export const raiseViewsPlatformStatisticFieldsArray = Object.values(RaiseViewsPlatformStatisticFields) as string[];
export const reportsPlatformStatisticFieldsArray = Object.values(ReportsPlatformStatisticFields) as string[];
export const usersPlatformStatisticFieldsArray = Object.values(UsersPlatformStatisticFields) as string[];
