
export enum BlockchainNetworks {
  bscMainNetwork = 'bscMainNetwork',
  ethMainNetwork = 'ethMainNetwork',
  rinkebyTestNetwork = 'rinkebyTestNetwork',
  bscTestNetwork = 'bscTestNetwork',
  workQuestNetwork = 'workQuestNetwork',        // TODO remove because legacy
  workQuestDevNetwork = 'workQuestDevNetwork',
}

export type LocationType = {
  longitude: number;
  latitude: number;
}

export type LocationPostGISType = {
  type: "Point";
  coordinates: [number, number];
  crs: { type: "name", properties: { name: "EPSG:4326" } };
}

export enum WorkPlace {
  Remote = "remote",
  InOffice = "inOffice",
  Hybrid = "hybrid"
}

export enum Priority {
  AllPriority = 0,
  FixedDelivery,
  ShortTerm,
  Urgent,
}

export type Phone = {
  codeRegion: string,
  phone: string,
  fullPhone: string,
}

export type Place = {
  country: string | null;
  city: string | null;
}

export enum BlackListStatus {
  Blocked,
  Unblocked
}

export enum HTTPVerb {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum RatingStatus {
  None = 0,

  NoStatus = 1 << 0,
  Verified = 1 << 1,
  Reliable = 1 << 2,
  TopRanked = 1 << 3,

  AllStatuses = RatingStatus.TopRanked | RatingStatus.Reliable | RatingStatus.Verified | RatingStatus.NoStatus
}


export const RatingStatuses = [
  RatingStatus.NoStatus,
  RatingStatus.Verified,
  RatingStatus.Reliable,
  RatingStatus.TopRanked,
]

export enum PayPeriod {
  Hourly = 'hourly',
  Daily = 'daily',
  Weekly = 'weekly',
  BiWeekly = 'biWeekly',
  SemiMonthly = 'semiMonthly',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  SemiAnnually = 'semiAnnually',
  Annually = 'annually',
  FixedPeriod = 'fixedPeriod',
  ByAgreement = 'byAgreement',
}
