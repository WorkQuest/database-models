export enum DaoPlatformStatisticFields {
  Votes = 'votes',
  DelegatedValue = 'delegatedValue',
  VotesForPercent = 'votesForPercent',
  VotesAgainPercent = 'votesAgainPercent',
}

export enum DisputesPlatformStatisticFields {
  Total = 'total',
  Pending = 'pending',
  Created = 'created',
  InProgress = 'inProgress',
  AcceptedWork = 'acceptedWork'
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
}

export enum RaiseViewsPlatformStatisticFields {
  ProfilesTotal = 'profilesTotal',
  ProfilesGoldPlus = 'profilesGoldPlus',
  ProfilesGold = 'profilesGold',
  ProfilesSilver = 'profilesSilver',
  ProfilesBronze = 'profilesBronze',
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
}

export const daoPlatformStatisticFieldsArray = Object.values(DaoPlatformStatisticFields);
export const disputesPlatformStatisticFieldsArray = Object.values(DisputesPlatformStatisticFields);
export const questsPlatformStatisticFieldsArray = Object.values(QuestsPlatformStatisticFields);
export const raiseViewsPlatformStatisticFieldsArray = Object.values(RaiseViewsPlatformStatisticFields);
export const reportsPlatformStatisticFieldsArray = Object.values(ReportsPlatformStatisticFields);
export const usersPlatformStatisticFieldsArray = Object.values(UsersPlatformStatisticFields);